import BenchmarkButton from '../BenchmarkButton';

function GalleryArtwork({img, desc, name, id}) {
  return (
    <div className='trois_gallery_img'>
        <img src={img} alt={desc} />
        <div className='trois_images_info'>
            <div>
                <p>{name}</p>
                <BenchmarkButton id={id} />
            </div>
            <div></div>
        </div>
    </div>
  );
}

export default GalleryArtwork;
