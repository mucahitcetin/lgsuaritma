import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Sol Bölüm: Görsel */}
        <div className="md:w-1/2">
          <img
            src="/hakkımızda2.jpg" 
            alt="Su Arıtma Görseli"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Sağ Bölüm: İçerik */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Saflık ve Kalite: Su Arıtma Sistemleri
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Günümüzde temiz suya erişim, sağlıklı yaşamın temel bir unsurudur.
          </p>
          <p className="text-gray-600 mb-4">
            Ancak, su kaynaklarının kirlenmesi ve kirliliğin artmasıyla birlikte, güvenli içme suyu
            temin etmek giderek zorlaşmaktadır. İşte bu noktada su arıtma sistemleri, modern teknolojinin
            sağladığı bir nimet olarak karşımıza çıkıyor.
          </p>
          <p className="text-gray-600 mb-4">
            Su arıtma sistemleri, suların içerdiği zararlı maddeleri ve kirleticileri gidermek amacıyla
            tasarlanmış sofistike cihazlardır. Bu sistemler, evlerden endüstriyel tesislere kadar geniş bir
            kullanım yelpazesine sahiptir. Peki, su arıtma sistemleri neden bu kadar önemlidir?
          </p>

        
        </div>
      </div>
    </div>
  );
};

export default About;
