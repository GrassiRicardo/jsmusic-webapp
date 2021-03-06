/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
// Adds the systems that shape your system
systems({
  'jsmusic-webapp': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: {"docker": "[repository]:[tag]"},
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: "# command to run app",
    wait: 20,
    mounts: {
      '/azk/#{manifest.dir}': path("."),
    },
    envs: {
      // set instances variables
      EXAMPLE: "value",
    },
  },
});
