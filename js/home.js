function i18nLoaded() {
    document.querySelectorAll(".main-box").forEach(element => element.classList.add("loaded"));
}

// set timeout to prevent error
setTimeout(i18nLoaded, 200);

function copyToClipboard(textToCopy) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(textToCopy);
    } else {
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "absolute";
        textArea.style.opacity = 0;
        textArea.style.left = "-1000%";
        textArea.style.top = "-1000%";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}

i18n = {
    zh_cn: {
        console: "被你发现辣！",
        hello: [
            "氦！佳想安善？",
            "你好呀~",
            "摸大鱼，摆大烂",
            "规则就是用来打破的",
            "o/",
            "awa"
        ],
        copied: '已复制到剪贴板'
    },
    en_us: {
        console: "You found me! www",
        copied: 'Copied!',
        "你好呀": "Awww",
        "氦！佳想安善？": 'Hello there!',
        "你好呀~": "Hey!",
        "摸大鱼，摆大烂": "Ayyyyyy!",
        "规则就是用来打破的": "Welcome here",
        "不要因为走得太远，就忘了当初为什么出发。": "Don't forget why we embarked, even we have walked far.",
        "十月廿一": "10-21@CNLC",
        "重庆开州 | 福建泉州": "Kaizhou,Chongqing | Quanzhou,Fujian",
        "学生": "Student",
        "摆大烂": "Bullshit",
        "原神": "GenshinImpact",
        "星铁": "Honkai:SR",
    }
}

userLang = navigator.language || navigator.userLanguage;
is_zh = userLang.startsWith('zh');
trans = is_zh ? i18n.zh_cn : i18n.en_us;
document.documentElement.lang = is_zh? 'zh-CN': 'en';

document.querySelectorAll('.docopy').forEach(function (element) {
    element.addEventListener('click', function (event) {
        e = event.target;
        old = e.innerText;
        copyToClipboard(old);
        e.innerText = trans.copied;
        setTimeout(() => {
            e.innerText = old;
        }, 1000);
    });
});

let random = Math.floor(Math.random() * i18n.zh_cn.hello.length);
document.getElementById("hello").innerText = i18n.zh_cn.hello[random];

if (!is_zh) {
    document.querySelectorAll('.translatable').forEach(element => {
        text = element.innerText;
        element.innerText = trans[text] || text;
    });
}

// just for fun
eval(window.atob('Y29uc29sZS5sb2coIiVjIiArIHRyYW5zLmNvbnNvbGUsICJ0ZXh0LXNoYWRvdzogMCAwIDEwcHggIzY2Y2NmZjsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogIzY2Y2NmZiIpOw=='));

// end of script
i18nLoaded();
