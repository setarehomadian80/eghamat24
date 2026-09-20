
export default function Banner() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 *:rounded-lg **:rounded-lg">
        <div >
          <img className="object-contain" src="/banners/b2b-collaboration.jpg" alt="banner1" />
        </div>
        <div>
          <img className="object-contain" src="/banners/b2b-host.jpg" alt="banner2" />
        </div>
      </div>
    </main>
  );
}
