import React from 'react'
  import 
  {FaShoppingBag,
  FaStore,
  FaParking,
  FaUtensils,
  FaFilm,
  FaChild,
  FaWifi,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import PageTitle from '../../../partials/PageTitle';
import ServiceCards from '../../../partials/ServiceCards';

const Services = () => {
  return (
    <>
        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <PageTitle
            title={"Our Services"}/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <ServiceCards
              icon={FaParking}
              title={"Ample Parking"}
              description={"Secure parking with 2000+ spaces across 5 levels, including EV charging stations."}/>

              {/* Service 2 */}
              <ServiceCards
              icon={FaWifi}
              title={"Free WiFi"}
              description={"High-speed internet access throughout the mall with no login required."}/>

              {/* Service 3 */}
              <ServiceCards
              icon={FaChild}
              title={"Kids Zone"}
              description={"Supervised play area with trained staff so you can shop worry-free."}/>
            </div>
          </div>
        </section>
    </>
  );
};

export default Services;