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
    <div className="min-h-screen px-2 py-8 space-y-12">
      <div className="max-w-xs mx-auto">
        <h2 className="text-xl font-mono font-medium">Sortable Default</h2>
        <ReactSortable list={itemList} setList={setItemList} swap>
          {itemList.map((item) => (
            <div
              key={item.id}
              className={cn(
                'border-gray-300 shadow p-4 my-2 bg-pink-100 flex items-center rounded-lg text-white cursor-move',
                item.colorClassName,
              )}
            >
              <div className="ml-4 flex-1 text-xl font-semibold font-mono uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </ReactSortable>
      </div>

      <div className="max-w-xs mx-auto">
        <h2 className="text-xl font-mono font-medium">With Animation</h2>
        <ReactSortable list={itemList} setList={setItemList} swap animation={300}>
          {itemList.map((item) => (
            <div
              key={item.id}
              className={cn(
                'border-gray-300 shadow p-4 my-2 bg-pink-100 flex items-center rounded-lg text-white cursor-move',
                item.colorClassName,
              )}
            >
              <div className="ml-4 flex-1 text-xl font-semibold font-mono uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </ReactSortable>
      </div>

      <div className="max-w-xs mx-auto">
        <h2 className="text-xl font-mono font-medium">With Animation, With Handle</h2>
        <ReactSortable
          list={itemList}
          setList={setItemList}
          swap
          animation={300}
          handle=".my-handle"
        >
          {itemList.map((item) => (
            <div
              key={item.id}
              className={cn(
                'border-gray-300 shadow p-4 my-2 bg-pink-100 flex items-center rounded-lg text-white',
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

      <div className="max-w-xs mx-auto">
        <h2 className="text-xl font-mono font-medium">With Grid</h2>
        <ReactSortable
          className="grid grid-cols-2 gap-4 my-2"
          list={itemList}
          setList={setItemList}
          swap
          animation={300}
        >
          {itemList.map((item) => (
            <div
              key={item.id}
              className={cn(
                'border-gray-300 shadow p-4 bg-pink-100 flex items-center rounded-lg text-white cursor-move',
                item.colorClassName,
              )}
            >
              <div className="ml-4 flex-1 text-xl font-semibold font-mono uppercase">
                {item.title}
              </div>
            </div>
          ))}
        </ReactSortable>
      </div>
    </div>
  );
}
