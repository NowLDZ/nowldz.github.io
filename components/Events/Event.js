import { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { getUserFriendlyURI } from './getUserFriendlyURI.utils';

export function Event({ events, name, singleEvent }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const onNextArrowPress = () => {
    setAnimate(true);
    if (currentIndex + 1 === events.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const onPreviousArrowPress = () => {
    setAnimate(true);
    if (currentIndex === 0) {
      setCurrentIndex(events.length - 1);
    } else {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const navigateToEvent = () => {
    const eventName = singleEvent?.name || events[currentIndex]?.name;
    window.dataLayer.push({ event: 'eventPageClick', category: eventName });
    const URI = encodeURI(getUserFriendlyURI(eventName));
    router.push(`/event/${URI}`);
  };

  return (
    <div
      className={clsx(
        'flex flex-col mb-24 w-full text-black xl:flex-row',
        animate && 'animate-fadeIn',
      )}
      onAnimationEnd={() => setAnimate(false)}>
      <img
        style={{ height: 400, width: 600 }}
        onClick={navigateToEvent}
        className="block mr-20 cursor-pointer object-cover"
        src={singleEvent?.mainPhoto || events[currentIndex]?.mainPhoto}
        alt="mainPhoto"
      />
      <div className="flex flex-col justify-between mx-4 sm:mx-0">
        <div className="flex flex-col">
          <div
            className={clsx(
              'self-start mb-8 mt-10 px-4 py-3 bg-orange_alpha_15 rounded-full xl:mt-0',
              !name && 'invisible',
            )}>
            <span className="text-orange font-bold">{name}</span>
          </div>
          <div onClick={navigateToEvent} className="flex items-center">
            <span className="mr-2 hover:text-orange text-5xl font-bold cursor-pointer">
              {singleEvent?.name || events[currentIndex]?.name}
            </span>
            <img
              className="h-6 cursor-pointer"
              src="/assets/rightArrow.svg"
              alt="right arrow"
            />
          </div>
          <p className="py-7 text-black_alpha_70 text-base font-light">
            {singleEvent?.description || events[currentIndex]?.description}
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center mr-4">
              <img
                className="mr-3 rounded-full shadow-eventIcons"
                src="/assets/pin.svg"
                alt="pin"
              />
              <span className="text-lg font-semibold">
                {singleEvent?.place || events[currentIndex]?.place}
              </span>
            </div>
            <div className="flex items-center">
              <img
                className="mr-3 rounded-full shadow-eventIcons"
                src="/assets/calendar.svg"
                alt="calendar"
              />
              <span className="text-lg font-semibold">
                {singleEvent?.time || events[currentIndex]?.time}
              </span>
            </div>
          </div>
        </div>
        {!singleEvent ? (
          <div className="flex mt-2">
            <img
              onClick={onPreviousArrowPress}
              className="mr-3 cursor-pointer transform rotate-180"
              src="/assets/orange_navigation_arrow.svg"
              alt="navigation arrow"
            />
            <img
              onClick={onNextArrowPress}
              className="cursor-pointer"
              src="/assets/orange_navigation_arrow.svg"
              alt="navigation arrow"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
