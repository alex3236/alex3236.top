import Badge from '../badge';
import {B, PartHolder} from '../utils';

export default function PartContacts() {
  return (
    <PartHolder
      title={
        <>
          也许能通过以下方式<B>找到我</B>？
        </>
      }
    >
      <Badge
        icon='FaGithub'
        tooltip='Github'
        url='https://github.com/alex3236'
        name='Alex3236'
        className='bg-slate-900 text-white dark:border-slate-500 dark:border'
      />
      <Badge
        icon='FaXTwitter'
        tooltip='X'
        url='https://x.com/alex32768'
        name='@Alex32768'
        className='bg-slate-900 text-white dark:border-slate-500 dark:border'
      />
      <Badge
        icon='FaBilibili'
        tooltip='哔哩哔哩'
        url='https://space.bilibili.com/275212628'
        name='@Alex3236'
        className='bg-pink-600 text-white'
      />
      <Badge
        icon='FaMusic'
        tooltip='QQ 音乐'
        url='https://y.qq.com/n/ryqq/profile?uin=owSz7wEqow4qNv**'
        name='Alex3236'
        className='bg-yellow-700 text-white'
      />
      <Badge
        icon='FaDiscord'
        tooltip='Discord'
        name='alex3236'
        className='bg-slate-900 text-white dark:border-slate-500 dark:border'
      />
      <Badge
        icon='FaSteamSymbol'
        tooltip='Steam'
        name='alex3236_'
        className='bg-slate-900 text-white dark:border-slate-500 dark:border'
      />
      <Badge
        icon='FaQq'
        tooltip='QQ'
        name='2706992599'
        className='bg-red-900 text-white'
      />
      <Badge
        icon='FaWeixin'
        tooltip='微信'
        name='ely32768'
        className='bg-green-800 text-white'
      />
      <Badge
        icon='FaPaperPlane'
        tooltip='Telegram'
        url='https://t.me/ely_32768'
        name='ely_32768'
        className='bg-blue-900 text-white'
      />
      <Badge
        icon='FaEnvelope'
        tooltip='邮箱'
        itemProp='email'
        url='mailto:me@alex3236.top'
        name='me@alex3236.top'
        className='bg-zinc-600 text-white'
      />
    </PartHolder>
  );
}
