import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import cn from 'classnames';

const items = [
  {
    id: 'lor',
    title: 'lorem',
    colorClassName: 'bg-gradient-to-br from-yellow-200 to-yellow-400',
  },
  {
    id: 'ips',
    title: 'ipsum',
    colorClassName: 'bg-gradient-to-br from-pink-200 to-pink-400',
  },
  {
    id: 'dol',
    title: 'dolor',
    colorClassName: 'bg-gradient-to-br from-blue-200 to-blue-400',
  },
  {
    id: 'sit',
    title: 'sit',
    colorClassName: 'bg-gradient-to-br from-green-200 to-green-400',
  },
];

export default function Home() {
  const [itemList, setItemList] = useState(items);
  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center h-screen">
      <ReactSortable list={itemList} setList={setItemList} swap animation={300} handle=".my-handle">
        {itemList.map((item) => (
          <div
            key={item.id}
            className={cn(
              'border-gray-300 shadow w-80 p-4 my-2 bg-pink-100 flex items-center rounded-lg text-white',
              item.colorClassName,
            )}
          >
            <span className="my-handle p-1 cursor-move text-xl">+</span>
            <div className="ml-4 flex-1 text-xl font-semibold font-mono uppercase">
              {item.title}
            </div>
          </div>
        ))}
      </ReactSortable>
    </div>
  );
}
