import PropTypes from 'prop-types';
export default function Card({ title, body, image, alt }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-4 sm:w-full md:w-auto">
      {image && <img src={image} alt={alt} className="w-full h-40 object-cover rounded-md mb-3" loading="lazy" />}
      <h3 className="font-semibold sm:text-lg md:text-base lg:text-lg">{title}</h3>
      <p className="text-gray-600 text-sm mt-2 sm:text-base md:text-sm">{body}</p>
    </article>
  );
}
Card.propTypes = { title: PropTypes.string, body: PropTypes.string, image: PropTypes.string, alt: PropTypes.string };