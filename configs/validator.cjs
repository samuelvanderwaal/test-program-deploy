const path = require("path");

const programDir = path.join(__dirname, "..", "programs");
function getProgram(dir, programName) {
  return path.join(programDir, dir, "target", "deploy", programName);
}

module.exports = {
  validator: {
    commitment: "processed",
    programs: [
      {
        label: "MyProgram",
        programId: "2AMMY7hjwZbrvgYgQ2tXVxEKikv11QrZE4dLLmH53kei",
        deployPath: getProgram("my-program", "my_program.so")
      }
    ]
  }
};
