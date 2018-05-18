const compile = require("../compile");

module.exports = {
  options: [
    {
      alias: "s",
      name: "source",
      type: String,
      typeLabel: "{underline dir}",
      description: "Root directory containing the Markdown documentation files."
    },
    {
      alias: "i",
      name: "intermediate",
      type: String,
      typeLabel: "{underline dir}",
      description: "[Defaults to a generated OS temporary directory] Temporary directory that will be used during compilation."
    },
    {
      alias: "o",
      name: "output",
      type: String,
      typeLabel: "{underline dir}",
      description: "Where to store all the compiled documentation."
    },
    {
      alias: "S",
      name: "state",
      type: String,
      typeLabel: "{underline file}",
      description: "Location of the state file that will be read and written to.\nA lock file will be created in the same directory."
    },
    {
      alias: "m",
      name: "metadata",
      type: String,
      typeLabel: "{underline filename}",
      description: "[Default `__metadata__.js`] File name of metadata files."
    },
    {
      alias: "f",
      name: "feedback",
      type: String,
      typeLabel: "{underline url}",
      description: "[Optional] URL to send feedback to as an HTTP POST request."
    },
    {
      alias: "P",
      name: "prefix",
      type: String,
      typeLabel: "{underline path}",
      description: "[Default `/`] URL path to prepend to every documentation URL."
    },
    {
      alias: "p",
      name: "projects",
      type: String,
      multiple: true,
      defaultOption: true,
      typeLabel: "{underline name} ...",
      description: "Names of the projects to compile.\nThis can be provided directly at the end without `-p/--projects`."
    },
  ],
  action: args => {
    compile({
      clean: args.clean,
      sourceDir: args.source,
      intermediateDir: args.intermediate,
      outputDir: args.output,
      statePath: args.state,
      metadataFileName: args.metadata,
      feedbackUrl: args.feedback,
      projectNames: args.projects,
      urlPathPrefix: args.prefix,
    });
  },
  help: [
    {
      header: "Options",
    },
  ],
};
