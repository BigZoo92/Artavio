import BenchmarkButton from '../BenchmarkButton';

function DiscoverExperimental({id, name, desc, img}) {
  return (
    <div className='suggestion_wrap'>
        <img src={img} alt={desc} />
        <h3>{name}</h3>
        <button>
            Add
            <BenchmarkButton id={id} />
        </button>
    </div>
  );
}

export default DiscoverExperimental;
