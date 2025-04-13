import React from 'react'

function StarRating({ count }) {
  return (
    <div className="flex mb-2">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
      {[...Array(5 - count)].map((_, i) => (
        <span key={i} className="text-gray-300 text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating