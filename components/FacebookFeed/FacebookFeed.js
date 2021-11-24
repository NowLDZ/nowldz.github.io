import Iframe from 'react-iframe';

function Feed(props) {
  const { postId = 358511737682033 } = props;
  return (
    <div className="flex items-center m-8">
      <Iframe
        src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fnowldz%2Fposts%2F${postId}&show_text=true&width=350`}
        width="350"
        height="600"
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        className="shadow-dropDownMenu"
      />
    </div>
  );
}

const postsIds = [
  '541630966036775',
  '358511737682033',
  '357178847815322',
  '406654346201105',
  '362034870663053',
];

export function FacebookFeed() {
  return (
    <div
      id="facebook_feed"
      className="flex flex-col mb-4 mx-auto sm:px-6 lg:px-8">
      <h2 className="mb-4 text-black text-5xl font-bold tracking-tight md:text-6xl">
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-orangeLight to-orange">
          #
        </span>
        nowLDZ
      </h2>
      <div className="flex pb-12 overflow-scroll sm:px-6 lg:px-8">
        {postsIds.map(postId => (
          <Feed key={postId} postId={postId} />
        ))}
      </div>
    </div>
  );
}
