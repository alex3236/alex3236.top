import Badge from '../badge';
import {B, PartHolder} from '../utils';

export default function PartHobbies() {
  return (
    <PartHolder
      title={
        <>
          我的<B>兴趣爱好</B>，如果你想知道的话？
        </>
      }
    >
      <Badge
        disabled={true}
        icon='FaCube'
        name='MC'
        className='bg-green-700 text-white'
      />
      <Badge
        disabled={true}
        icon='FaTrain'
        name='星铁'
        className='bg-cyan-700 text-white'
      />
      <Badge
        disabled={true}
        icon='FaGamepad'
        name='原神'
        className='bg-cyan-700 text-white'
      />
    </PartHolder>
  );
}
