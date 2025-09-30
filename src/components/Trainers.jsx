import React from "react";
import trainer1 from "../assets/trainer1.jpeg";
import trainer2 from "../assets/trainer2.jpeg";
import trainer3 from "../assets/trainer3.jpeg";

function Trainers() {
  const trainers = [
    {
      name: "John Doe",
      specialty: "Strength & Conditioning",
      img: trainer1,
    },
    {
      name: "Jane Smith",
      specialty: "Yoga & Flexibility",
      img: trainer2,
    },
    {
      name: "Mike Johnson",
      specialty: "Cardio Training",
      img: trainer3,
    },
  ];

  return (
    <section id="trainers" className="py-16 bg-gray-200 text-center px-6">
      <h2 className="text-4xl font-bold text-yellow-500 mb-10">
        Meet Our Trainers
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {trainers.map((trainer, idx) => (
          <div
            key={idx}
            className="card bg-black text-white shadow-xl hover:scale-105 transition-transform duration-300 rounded-lg overflow-hidden"
          >
            <figure>
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-164 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-bold text-yellow-500">
                {trainer.name}
              </h3>
              <p className="text-gray-300">{trainer.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trainers;
