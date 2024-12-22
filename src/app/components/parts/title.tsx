import { B } from '../utils';

export function PartTitle() {
  return (
    <>
      <h1 className='text-5xl md:text-6xl font-extrabold text-sky-700 dark:text-blue-200'>
        你好！
      </h1>
      <h2 className='text-3xl md:text-4xl font-bold mt-4 text-sky-800 dark:text-blue-300'>
        这里是
        <span itemProp='name' className='px-2 text-sky-900 dark:text-blue-400'>
          Alex3236
        </span>
      </h2>
    </>
  );
}

export function PartMotto() {
  const motto =
    Math.random() < 0.5
      ? '不要因为走得太远，就忘了当初为什么出发。'
      : '只要不失去你的崇高，整个世界都会向你敞开。';
  return (
    <h3 className='mt-6 text-xl text-sky-900 dark:text-sky-200 leading-relaxed'>
      「 <B>{motto}</B> 」
    </h3>
  );
}
