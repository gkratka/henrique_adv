import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPost = {
    title: 'Nova Regulamentação do Licenciamento Ambiental: O que Muda em 2024',
    excerpt: 'Análise detalhada das principais mudanças na legislação ambiental brasileira e seus impactos para empresas de todos os portes.',
    author: 'Dr. Carlos Silva',
    date: '15 de Março, 2024',
    readTime: '8 min',
    category: 'Licenciamento',
    image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800'
  };

  const posts = [
    {
      title: 'Compliance Ambiental: Como Evitar Multas e Penalidades',
      excerpt: 'Guia prático para implementar um programa de compliance ambiental eficaz na sua empresa.',
      author: 'Dra. Ana Oliveira',
      date: '12 de Março, 2024',
      readTime: '6 min',
      category: 'Compliance',
      image: 'https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Licenciamento de Energia Renovável: Oportunidades e Desafios',
      excerpt: 'Como navegar pelos requisitos legais para projetos de energia solar e eólica no Brasil.',
      author: 'Dr. Ricardo Santos',
      date: '10 de Março, 2024',
      readTime: '7 min',
      category: 'Energia',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'CAR Rural: Regularização e Benefícios para Produtores',
      excerpt: 'Tudo sobre o Cadastro Ambiental Rural e como utilizá-lo para regularizar sua propriedade.',
      author: 'Dr. Felipe Mendes',
      date: '8 de Março, 2024',
      readTime: '5 min',
      category: 'Rural',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'ESG e Direito Ambiental: Alinhando Sustentabilidade e Negócios',
      excerpt: 'Como integrar práticas ESG à estratégia empresarial mantendo conformidade legal.',
      author: 'Dra. Marina Costa',
      date: '5 de Março, 2024',
      readTime: '9 min',
      category: 'ESG',
      image: 'https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Auditoria Ambiental: Identificando Riscos Antes que se Tornem Problemas',
      excerpt: 'A importância da auditoria preventiva e como ela pode proteger seu negócio.',
      author: 'Dra. Ana Oliveira',
      date: '3 de Março, 2024',
      readTime: '6 min',
      category: 'Auditoria',
      image: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Recursos Hídricos: Licenciamento e Outorgas de Uso da Água',
      excerpt: 'Processo de obtenção de outorgas para uso de recursos hídricos em atividades industriais.',
      author: 'Dr. Carlos Silva',
      date: '1 de Março, 2024',
      readTime: '7 min',
      category: 'Recursos Hídricos',
      image: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = ['Todos', 'Licenciamento', 'Compliance', 'Energia', 'Rural', 'ESG', 'Auditoria'];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Licenciamento': 'bg-blue-100 text-blue-800',
      'Compliance': 'bg-emerald-100 text-emerald-800',
      'Energia': 'bg-yellow-100 text-yellow-800',
      'Rural': 'bg-green-100 text-green-800',
      'ESG': 'bg-purple-100 text-purple-800',
      'Auditoria': 'bg-orange-100 text-orange-800',
      'Recursos Hídricos': 'bg-cyan-100 text-cyan-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog Jurídico
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, análises e atualizações sobre direito ambiental brasileiro. 
            Mantenha-se informado sobre as últimas mudanças na legislação.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </span>
                <span className="text-sm text-gray-500">Artigo em Destaque</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <Link
                to="#"
                className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Ler artigo completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      Ler mais
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md">
              Carregar mais artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Newsletter Jurídica
          </h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Receba análises exclusivas e atualizações sobre direito ambiental diretamente em seu e-mail.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu e-mail profissional"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
              />
              <button className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Inscrever-se
              </button>
            </div>
            <p className="text-sm text-emerald-100 mt-4">
              Sem spam. Apenas conteúdo relevante para sua prática jurídica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;