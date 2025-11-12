import PropTypes from 'prop-types';
export default function Card({ title, body, image, alt }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-4">
      {image && <img src={image} alt={alt} className="w-full h-40 object-cover rounded-md mb-3" loading="lazy" />}
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{body}</p>
    </article>
  );
}
Card.propTypes = { title: PropTypes.string, body: PropTypes.string, image: PropTypes.string, alt: PropTypes.string };
