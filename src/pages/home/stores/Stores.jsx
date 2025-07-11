import React from 'react'
  import 
  {
  FaStore,
  FaUtensils,
  FaFilm,
  FaChild,
} from "react-icons/fa";
import PageTitle from '../../../partials/PageTitle';
import StoreCards from '../../../partials/StoreCards';

const Stores = () => {
  return (
    <>
        {/* Stores Section */}
        <section id="stores" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <PageTitle
            title={"Our Stores"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Store 1 */}
              <StoreCards
              image={"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
              icon={FaStore}
              name={"Fashion Haven"}
              offer={"Trendy clothing for all ages and styles"}
              type={"Level 2, Section B"}
              alt={"Fashion Haven store"}
              />

              {/* Store 2 */}
              <StoreCards
              image={"https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"}
              icon={FaUtensils}
              name={"Gourmet Delight"}
              offer={"International cuisine and local favorites"}
              type={"Food Court, Level 1"}
              alt={"Gourmet Delights restaurant"}
              />

              {/* Store 3 */}
              <StoreCards
              image={"https://images.unsplash.com/photo-1590845947676-fa2576f401d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
              icon={FaFilm}
              name={"CineMax Theaters"}
              offer={"Latest blockbusters in 4K Dolby Atmos"}
              type={"Entertainment Zone, Level 3"}
              alt={"CineMax Theaters"}
              />

              {/* Store 4 */}
              <StoreCards
              image={"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"}
              icon={FaChild}
              name={"Toy Wonderland"}
              offer={"Toys and games for kids of all ages"}
              type={"Family Zone, Level 2"}
              alt={"Toy Wonderland store"}
              />
            </div>
          </div>
        </section>
    </>
  );
};

export default Stores