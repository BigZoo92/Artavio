import { BiArrowBack, BiFilter } from 'react-icons/bi';

function Filter() {
  return (
    <aside>
        <div>
            <BiArrowBack />
            <BiFilter />
        </div>
        <div>
            <label htmlFor="tri_oldest">Oldest first</label>
            <input type="radio" id="tri_oldest" name="sort" />
        </div>
        <div>
            <label htmlFor="tri_newest">Newest first</label>
            <input type="radio" id="tri_newest" name="sort" />
        </div>
        <div>
            <label htmlFor="tri_download">Sort by download</label>
            <input type="radio" id="tri_download" name="sort" />
        </div>
        <div>
            <label htmlFor="tri_like">Sort by like</label>
            <input type="radio" id="tri_like" name="sort" />
        </div>
        <div>
            <label htmlFor="tri_view">Sort by view</label>
            <input type="radio" id="tri_view" name="sort" />
        </div>
    </aside>
  );
}

export default Filter;
