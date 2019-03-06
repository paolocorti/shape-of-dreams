import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import Petals from './Petals';
import topics from './data/topics.json';

const Explore1 = ({ history }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSwipeRight = () => {
    history.push(`/explore2`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore5`);
  };

  const goToChapter1 = () => {
    history.push(`/chapter1`);
  };

  const topic = topics[selectedIndex];

  console.log(topic);

  return (
    <Swipe
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={{ height: '100%' }}
    >
      <div className='w-100 flex flex-column pa4'>
        <div className='pa4 tc'>Explore1</div>
        <button
          onClick={() =>
            setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0)
          }
        >
          PREV
        </button>
        <button
          onClick={() =>
            setSelectedIndex(
              selectedIndex < topics.length ? selectedIndex + 1 : topics.length
            )
          }
        >
          NEXT
        </button>
        <Petals
          value={topic.value}
          name={topic.subject}
          language={topic.language}
          year={topic.year}
        />
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter1()}
      >
        <div className=''>READ CHAPTER 1</div>
      </div>
    </Swipe>
  );
};

export default Explore1;
