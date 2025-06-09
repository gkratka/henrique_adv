import React from 'react';
import { Mail, Linkedin, GraduationCap, Scale } from 'lucide-react';

const Team = () => {
  const partners = [
    {
      name: 'Dr. Carlos Silva',
      position: 'Sócio Fundador',
      specialty: 'Direito Ambiental Empresarial',
      education: 'Doutor em Direito Ambiental - USP',
      experience: '20 anos de experiência',
      description: 'Especialista em licenciamento ambiental para grandes empreendimentos e compliance ambiental corporativo.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'carlos.silva@silvaassociados.com.br'
    },
    {
      name: 'Dra. Ana Oliveira',
      position: 'Sócia',
      specialty: 'Direito Ambiental Processual',
      education: 'Mestre em Direito Ambiental - PUC-SP',
      experience: '15 anos de experiência',
      description: 'Especialista em defesa judicial e administrativa de infrações ambientais e recursos junto aos órgãos competentes.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'ana.oliveira@silvaassociados.com.br'
    }
  ];

  const associates = [
    {
      name: 'Dr. Ricardo Santos',
      position: 'Advogado Associado',
      specialty: 'Licenciamento Ambiental',
      education: 'Especialista em Direito Ambiental - FGV',
      experience: '8 anos de experiência',
      description: 'Foco em licenciamento de atividades industriais e minerárias, com experiência em projetos de grande porte.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'ricardo.santos@silvaassociados.com.br'
    },
    {
      name: 'Dra. Marina Costa',
      position: 'Advogada Associada',
      specialty: 'Consultoria Ambiental',
      education: 'Especialista em Gestão Ambiental - UFRJ',
      experience: '6 anos de experiência',
      description: 'Especialista em auditoria ambiental, due diligence e implementação de programas de compliance.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'marina.costa@silvaassociados.com.br'
    },
    {
      name: 'Dr. Felipe Mendes',
      position: 'Advogado Associado',
      specialty: 'Direito Ambiental Rural',
      education: 'Especialista em Direito Agrário - UFMG',
      experience: '5 anos de experiência',
      description: 'Especialista em questões ambientais rurais, CAR, reserva legal e áreas de preservação permanente.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'felipe.mendes@silvaassociados.com.br'
    },
    {
      name: 'Dra. Juliana Lima',
      position: 'Advogada Junior',
      specialty: 'Pesquisa e Análise Jurídica',
      education: 'Graduada em Direito - Mackenzie',
      experience: '2 anos de experiência',
      description: 'Especialista em pesquisa jurisprudencial e análise de legislação ambiental, apoio em contencioso.',
      image: 'https://images.pexels.com/photos/3760278/pexels-photo-3760278.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'juliana.lima@silvaassociados.com.br'
    }
  ];

  const TeamMember = ({ member, isPartner = false }: { member: any, isPartner?: boolean }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-emerald-600 font-medium mb-2">{member.position}</p>
            <p className="text-sm text-gray-600 mb-1">{member.specialty}</p>
          </div>
          {isPartner && (
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Scale className="h-5 w-5 text-emerald-600" />
            </div>
          )}
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <GraduationCap className="h-4 w-4 text-emerald-600" />
            <span>{member.education}</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-emerald-600">{member.experience}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {member.description}
        </p>
        
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
          <a 
            href={`mailto:${member.email}`}
            className="inline-flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Contato</span>
          </a>
          <a 
            href="#"
            className="inline-flex items-center space-x-1 text-gray-500 hover:text-emerald-600 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa Equipe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profissionais experientes e dedicados, unidos pela paixão pelo direito ambiental 
            e pelo compromisso em oferecer soluções jurídicas de excelência.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sócios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Liderança experiente com décadas de experiência em direito ambiental.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <TeamMember key={index} member={partner} isPartner={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advogados Associados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais especializados que complementam nossa expertise em diferentes áreas do direito ambiental.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {associates.map((associate, index) => (
              <TeamMember key={index} member={associate} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trabalho em Equipe
          </h2>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Nossa força está na colaboração. Cada membro da equipe contribui com sua experiência única, 
            garantindo que nossos clientes recebam sempre a melhor assessoria jurídica possível.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-emerald-100">Anos de Experiência Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-emerald-100">Especialistas Dedicados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-emerald-100">Casos de Sucesso</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;