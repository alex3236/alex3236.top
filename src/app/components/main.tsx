import Badge, { TooltipProvider } from "./badge";
import { B, PartHolder } from "./utils";
import '../style/animate-img.css'
import Image from "next/image";

export default function Main() {
    return <main className="flex lg:fixed overflow-auto h-full w-full justify-center items-center px-8 pb-20 lg:px-16 lg:pb-0">
        <div className="flex flex-col items-center lg:flex-row lg:mr-48">
            <Image priority={true} src="/image.png" alt="Avatar" width={384} height={510} className="lg:hidden relative w-64 h-64 mt-16 mb-8 object-cover object-top rounded-full shadow-md shadow-slate-300" />
            <div className="max-w-xl mx-3 h-full lg:py-12">
                <h1 className="text-5xl md:text-6xl font-extrabold text-blue-200">你好！</h1>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 text-blue-300">
                    这里是 <span className="text-blue-400">Alex3236</span>
                </h2>
                <PartHolder title={<>这些<B>标签</B>，也许能给你留下一些印象？</>}>
                    <Badge disabled={true} icon="FaCakeCandles" name="十月廿一" className="bg-pink-700 text-white" />
                    <Badge disabled={true} icon="FaLocationDot" name="重庆开州 | 福建泉州" className="bg-blue-700 text-white" />
                    <br />
                    <Badge disabled={true} icon="FaGraduationCap" name="学生" className="bg-gray-600 text-white" />
                    <Badge disabled={true} icon="FaFish" name="摆大烂" className="bg-gray-600 text-white" />
                </PartHolder>
                <PartHolder title={<>我的<B>兴趣爱好</B>，如果你想知道的话？</>}>
                    <Badge disabled={true} icon="FaCube" name="MC" className="bg-green-700 text-white" />
                    <Badge disabled={true} icon="FaGamepad" name="星铁" className="bg-cyan-700 text-white" />
                    <Badge disabled={true} icon="FaGamepad" name="原神" className="bg-cyan-700 text-white" />
                </PartHolder>
                <PartHolder title={<>也许能通过以下方式<B>找到我</B>？</>}>
                    <Badge icon="FaGithub" tooltip="Github" url="https://github.com/alex3236" name="Alex3236" className="bg-slate-900 text-white dark:border-slate-500 dark:border" />
                    <Badge icon="FaXTwitter" tooltip="X" url="https://x.com/alex32768" name="@Alex32768" className="bg-slate-900 text-white dark:border-slate-500 dark:border" />
                    <Badge icon="FaBilibili" tooltip="哔哩哔哩" url="https://space.bilibili.com/275212628" name="@Alex3236" className="bg-pink-600 text-white" />
                    <Badge icon="FaMusic" tooltip="QQ 音乐" url="https://y.qq.com/n/ryqq/profile?uin=owSz7wEqow4qNv**" name="Alex3236" className="bg-yellow-700 text-white" />
                    <Badge icon="FaDiscord" tooltip="Discord" name="alex3236" className="bg-slate-900 text-white dark:border-slate-500 dark:border" />
                    <Badge icon="FaSteamSymbol" tooltip="Steam" name="alex_3236" className="bg-slate-900 text-white dark:border-slate-500 dark:border" />
                    <Badge icon="FaQq" tooltip="QQ" name="2706992599" className="bg-red-900 text-white" />
                    <Badge icon="FaWeixin" tooltip="微信" name="ely32768" className="bg-green-800 text-white" />
                    <Badge icon="FaPaperPlane" tooltip="Telegram" url="https://t.me/ely_32768" name="ely_32768" className="bg-blue-900 text-white" />
                    <Badge icon="FaEnvelope" tooltip="邮箱" url="mailto:me@alex3236.top" name="me@alex3236.top" className="bg-zinc-600 text-white" />
                </PartHolder>
                <h3 className="mt-2 text-xl text-sky-200 leading-relaxed">「 <B>不要因为走得太远，就忘了当初为什么出发。</B> 」</h3>
            </div>
            <div className="max-w-sm self-end hidden lg:block animate-img absolute bottom-0 right-0">
                <Image
                    priority={true}
                    src="/image.png"
                    alt="Avatar"
                    width={384} height={510}
                />
            </div>
            <TooltipProvider />
        </div>
    </main>
}