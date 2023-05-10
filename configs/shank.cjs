const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "my_program",
  programId: "2AMMY7hjwZbrvgYgQ2tXVxEKikv11QrZE4dLLmH53kei",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "my-program")
});
