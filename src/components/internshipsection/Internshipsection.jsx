import React from "react";
import internship from "../../../public/images/internship.png";
import Button from "../button/Button";

function InternshipSection() {
  return (
    <div
      id="internship"
      className="max-w-[1258px] mx-auto my-12 px-4 mt-[100px] mb-[70px]"
    >
      <h2 className="text-xl font-bold text-black-500 border-l-4 border-orange-500 pl-2">
        Стажировка
      </h2>

      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <div className="flex-1">
          <p className="mt-4 text-gray-800">
            <span className="text-lg font-semibold text-orange-500">
              Okurmen Pro
            </span>{" "}
            — отличный шанс для начинающих разработчиков попробовать свои силы в
            реальных проектах, отточить навыки программирования и научиться
            работать в команде. Программа рассчитана на 3 месяца и охватывает
            как frontend, backend, UX/UI разработку. <br />
          </p>
          <p className="mt-[10px] text-gray-800">
            В ходе стажировки участники познакомятся с современными
            инструментами и технологиями веб-разработки, получат ценные знания и
            опыт, а также возможность дальнейшего трудоустройства. По окончанию
            курса вы можете подать заявку на стажировку.
          </p>
          <a href="https://wa.me/996503677798"
          target="_blank">
            
            <Button
              className="mt-[70px] lg:mt-[70px] sm:mt-[30px] w-full lg:w-auto"
              color="orange"
              ButtonText="Подать заявку"
            />
          </a>
        </div>

        <div className="lg:flex-1 lg:block lg:ml-8 hidden">
          <div className="border-3 border-orange-500 rounded-md overflow-hidden">
            <img
              src={internship}
              alt="Team photo"
              className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] lg:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipSection;
