export default function BannerCard({}) {
  return (
    <div className="bg-pink relative h-44 w-44 md:h-64 md:w-64 rounded-xl md:rounded-xl">
      <img
        src="src/assets/images/photos/profile-photo.jpeg"
        alt="profile-path"
        className="absolute top-2 left-2 md:top-3 md:left-3 rounded-3xl"
      />
    </div>
  );
}
