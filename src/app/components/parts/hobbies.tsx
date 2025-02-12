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
        icon='FaCube'
        tooltip='ID: Alex3236'
        content='Alex3236'
        name='MC'
        className='bg-green-700 text-white'
      />
      <Badge
        icon='FaTrain'
        tooltip='UID: 100851312'
        content='100851312'
        name='星铁'
        className='bg-cyan-700 text-white'
      />
      <Badge
        icon='FaGamepad'
        tooltip='UID: 221356958'
        content='221356958'
        name='原神'
        className='bg-cyan-700 text-white'
      />
    </PartHolder>
  );
}
