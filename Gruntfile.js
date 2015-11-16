/* global module, __dirname, process */

module.exports = function (grunt) {

    var userHome = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'],
            buildNumber = process.env.BUILD_NUMBER ? "." + process.env.BUILD_NUMBER : "";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            filename: '<%=pkg.artifactId%>-<%=pkg.version%>',
            filename_with_version: '<%=pkg.artifactId%>-<%=pkg.version%>' + buildNumber
        },
        clean: {
            target: ["target/**"],
            zip: ["*.zip"]
        },
        trimtrailingspaces: {
            main: {
                src: ['src/main/js/**/*.js'],
                options: {
                    filter: 'isFile',
                    encoding: 'utf8',
                    failIfTrimmed: false
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                forin: true,
                freeze: true,
                //maxparams: 1,
                noarg: true,
                nocomma: true,
                nonbsp: true,
                nonew: true,
                undef: true,
                futurehostile: true,
                latedef: true,
                //maxcomplexity: 5,
                browser: true,
                reporter: 'checkstyle',
                reporterOutput: 'target/jshint-result.xml'
            },
            all: ['src/main/js/**/*.js']
        },
        jscs: {
            src: "src/main/js/**/*.js",
            options: {
                //requireMultipleVarDecl: "onevar",
                disallowTrailingWhitespace: true
            }
        },
        replace: {
            replace_version: {
                src: ['src/main/js/**/*.js'],
                dest: 'target/dist/js/',
                replacements: [{
                        from: /@{chiika.js.version}/g,
                        to: "<%=pkg.version%>" + buildNumber
                    },
                    {
                        from: /\/\*global.*\*\//g,
                        to: ""
                    }]
            },
            prepare_prod_code: {
                src: ['target/dist/js/*.js'],
                dest: 'target/dist/prod/js/',
                replacements: [{
                        from: /(\/\/@{chiika-js-test}(?:.|[\n\r])+\/\/@{chiika-jsl-test})|(\/\/@{test-methods}(?:.|[\n\r])+\/\/@{test-methods})/g,
                        to: ""
                    }]
            },
        },
        concat: {
            js_default: {
                src: grunt.file.readJSON('js_default.json'),
                dest: 'target/js/<%= config.filename %>.js'
            }
        },
        'closure-compiler': {
            default: {
                closurePath: 'src/main',
                js: 'target/js/<%= config.filename %>.js',
                jsOutputFile: 'target/js/<%= config.filename %>-min.js',
                options: {
                    compilation_level: 'SIMPLE_OPTIMIZATIONS',
                    language_in: 'ECMASCRIPT5_STRICT'
                }
            }
        },
        copy: {
            create_default_js_with_version: {
                files: [{
                        src: 'target/js/<%= config.filename %>.js',
                        dest: 'target/js/<%= config.filename_with_version %>.js'
                    },
                    {
                        src: 'target/js/<%= config.filename %>-min.js',
                        dest: 'target/js/<%= config.filename_with_version %>-min.js'
                    } ,
                    {
                        src: 'target/js/<%= config.filename %>-min.js',
                        dest: ''+grunt.option('target')+'/<%= config.filename_with_version %>-min.js'
                    }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-maven-tasks');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-trimtrailingspaces');

    grunt.registerTask('delete', ['clean']);
    grunt.registerTask('tests', ['jshint', 'jscs']);
    grunt.registerTask('default', ['clean', 'trimtrailingspaces',
        'jshint',
        'jscs',
        'replace:replace_version',
        'replace:prepare_prod_code',
        'concat',
        'closure-compiler',
        'copy:create_default_js_with_version',
    ]);
    grunt.registerTask('chijs','default');
};
