import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      fullName: form.fullName.value,
      city: form.city.value,
      district: form.district.value,
      email: form.email.value,
      phone: form.phone.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Mesaj gönderildi.");
        setFormSubmitted(true);
        form.reset();
      } else {
        console.error("Mesaj gönderilemedi.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <section className="p-8">
      <h1 className="text-3xl lg:text-4xl font-semibold mt-6 mb-8 text-center text-blue-600">
        İLETİŞİM
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
  {/* adres */}
        <div>
          <h5 className="text-xl font-bold text-blue-600 my-2">
            Bize Ulaşın
          </h5>
          <p className="text-gray-700 mb-4 max-w-md">
            Su arıtma sistemleri ile ilgili bilgi almak, hizmetlerimiz hakkında
            sorular sormak ya da fiyat teklifi almak için bizimle iletişime
            geçebilirsiniz. Sağlıklı ve temiz suya ulaşmak için buradayız!
          </p>
          <p>İstanbul Avrupa Bölge Bayi</p>
          {/* logolar */}
          <div className="flex gap-4 mt-5">
          <a href="https://wa.me/905438315966" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-blue-600 text-3xl md:text-5xl hover:opacity-80" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61564246895052&locale=tr_TR " target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-3xl md:text-5xl hover:opacity-80" />
            </a>
            <a href="https://www.instagram.com/3msuaritma" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-blue-600 text-3xl md:text-5xl hover:opacity-80" />
            </a>
          </div>
        </div>
{/* form */}
        <div>
          {formSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              Form başarıyla gönderildi!
            </p>
          ) : (
            <form
              className="flex flex-col bg-gray-200 rounded-xl p-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-base font-bold text-gray-700"
                >
                  İsim ve Soyisim
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block mb-2 text-base font-bold text-gray-700"
                >
                  Şehir
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="district"
                  className="block mb-2 text-base font-bold text-gray-700"
                >
                  İlçe
                </label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  required
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base font-bold text-gray-700"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-base font-bold text-gray-700"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full p-2.5 rounded-lg border border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700"
              >
                Mesaj Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
