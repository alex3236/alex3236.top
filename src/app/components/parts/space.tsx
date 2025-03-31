import {T} from "../utils";
import Badge from "@/app/components/badge";

export default function PartSpace() {
  return <T>
    <span className='mr-1'>也欢迎来看看我的</span>
    <Badge
      icon='FaStar'
      tooltip='把星星揉进面团里，用月光当裱花袋～'
      url='https://space.alex3236.moe'
      name='星星碎片收容所 ➡'
      className='bg-sky-700 text-sky-50 text-sm align-[0.1em]'
    />
  </T>
}
