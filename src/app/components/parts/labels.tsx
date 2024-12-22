import Badge from '../badge';
import { B, PartHolder } from '../utils';

export default function PartLabels() {
  return (
    <PartHolder
      title={
        <>
          这些关于我的<B>标签</B>，也许能给你留下一些印象？
        </>
      }
    >
      <Badge
        itemProp='birthDate'
        disabled={true}
        icon='FaCakeCandles'
        name='十月廿一'
        className='bg-pink-700 text-white'
      />
      <Badge
        itemProp='homeLocation'
        disabled={true}
        icon='FaLocationDot'
        name='重庆开州 | 福建泉州'
        className='bg-blue-700 text-white'
      />
      <br />
      <Badge
        itemProp='jobTitle'
        disabled={true}
        icon='FaGraduationCap'
        name='学生'
        className='bg-gray-600 text-white'
      />

      <Badge
        disabled={true}
        icon='FaFish'
        name='摆大烂'
        className='bg-gray-600 text-white'
      />
      <Badge
        disabled={true}
        strikeThrough={true}
        icon='FaAccessibleIcon'
        name='二次元'
        className='bg-slate-500 text-white'
      />
    </PartHolder>
  );
}
