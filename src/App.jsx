import React, { useState } from "react";
import "./App.css";

function App() {
  const unidade = [
    {
      id: "ct-1",
      titulo: "CONSELHO TUTELAR 1",
      telefone: "(21) 2043-3635",
      ramal: "403",
      endereco: "Av. Lúcio Meira, 375 - Várzea",
      imagem:
        "",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.52915272649307!2d-42.96864558034805!3d-22.41146311825052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984ccf9aaaaaab%3A0xca5d138667905e18!2sCentro%20Administrativo%20Municipal!5e0!3m2!1spt-BR!2sbr!4v1755699327435!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Várzea",
        "Alto",
        "São Pedro",
        "Barra do Imbuí",
        "Tijuca",
        "Bom Retiro",
        "Araras",
        "Barroso",
        "Carlos Guinle",
        "Fazendinha",
        "Cascata Guarany",
        "Parque do Ingá",
        "Cascata dos Amores",
        "Taumaturgo",
        "Fátima",
        "Corta Vento",
        "Iúcas",
        "Agriões",
        "Panorama",
        "Jardim Eurpa",
        "Vila Muqui",
        "Quinta da Barra",
        "Paineiras",
        "Golfe",
        "Artistas",
        "Vale do Paraíso",
        "Cascata do Imbuí",
        "Granja Florestal",
        "Jardim Salaco",
        "Caleme",
        "Dente de Ouro",
        "Santa Cecília",
        "Ilha do Caxangá",
        "Beira Linha",
        "Jardim Serrano",
        "Campo Grande",
        "Espanhol",
        "Funcionários",
        "Pimentel",
        "Rosário",
        "Pimenteiras",
        "Jardim Pimenteiras",
        "Quarenta Casas",
        "Posse",
        "Prata",
        "Parque São Luiz",
        "Jardim Pinheiros",
        "Granja Comary",
        "Jardim Cascata",
      ],
    },
    {
      id: "ct-2",
      titulo: "CONSELHO TUTELAR 2",
      telefone: "(21) 2043-3636",
      ramal: "404",
      endereco: "Av. Lúcio Meira, 375 - Várzea",
      imagem:"",
      coordenadas:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.52915272649307!2d-42.96864558034805!3d-22.41146311825052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x984ccf9aaaaaab%3A0xca5d138667905e18!2sCentro%20Administrativo%20Municipal!5e0!3m2!1spt-BR!2sbr!4v1755699327435!5m2!1spt-BR!2sbr",
      abrangencia: [
        "Coreia",
        "Dorvalino",
        "Ermitage",
        "Fazenda Ermitage",
        "Fischer",
        "Fonte Santa",
        "Jacarandá",
        "Jardim Meudon",
        "Meudon",
        "Montanhas",
        "Prata",
        "Quinta Lebrão",
        "Vale da Revolta",
        "Vale Feliz",
        "Água Quente",
        "Andradas",
        "Brejal",
        "Parque Boa União",
        "Campo Limpo",
        "Cruzeiro",
        "Fazenda Suíça",
        "Gamboa",
        "Holliday",
        "Pessegueiros",
        "Ponte Nova",
        "Providência",
        "Rio Preto",
        "Santa Rita",
        "Serra do capim",
        "Serrinha",
        "Três Córregos",
        "Alegria",
        "Vieira",
        "Boa Fé",
        "Boa Vista",
        "Bonsucesso",
        "Campanha",
        "Canoas",
        "Estrelinha",
        "Frades",
        "Imbiú",
        "Motas",
        "Palmital",
        "Prates",
        "Porto",
        "Santa Rosa",
        "Sebastiana",
        "Vale Alpino",
        "Vargem Grande",
        "Venda Nova",
        "Vieira",
        "Vista Alegre",
      ],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [bairroSelecionado, setBairroSelecionado] = useState();
  const [unidadeSelecionado, setConselhoSelecionado] = useState(unidade[0]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBairros, setFilteredBairros] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allBairros = [...new Set(unidade.flatMap((item) => item.abrangencia))];

  const normalizeText = (text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const toggleList = (item, index) => {
    setSelectedIndex(index);
    setConselhoSelecionado(item);
    setIsExpanded((prev) => !prev);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const normalizedSearch = normalizeText(value);
      const filtered = allBairros.filter((bairro) =>
        normalizeText(bairro).includes(normalizedSearch)
      );
      setFilteredBairros(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredBairros([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectBairro = (bairro) => {
    setBairroSelecionado(bairro);

    const unidadeEncontrado = unidade.find((item) =>
      item.abrangencia.includes(bairro)
    );
    if (unidadeEncontrado) {
      setConselhoSelecionado(unidadeEncontrado);
      setSelectedIndex(unidade.indexOf(unidadeEncontrado));
      setIsExpanded(true);
      setSearchTerm(bairro);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="part-1">
          <div>
            <h1>Conselhos Tutelares</h1>
            <p style={{ textAlign: "center", marginTop: -10 }}>
              Teresópolis-RJ
            </p>
          </div>
        </div>
        <div className="part-2">
          <div className="search-container">
            <input
              id="field-sitewide-search"
              type="text"
              className="search"
              name="q"
              placeholder="Pesquisar por Bairro"
              aria-label="Pesquisar por Bairro"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => {
                if (searchTerm.length > 0) setShowSuggestions(true);
              }}
              onBlur={() => {
                // Delay para permitir clicar na sugestão
                setTimeout(() => setShowSuggestions(false), 150);
              }}
            />
            {showSuggestions && filteredBairros.length > 0 && (
              <ul className="suggestions-list">
                {filteredBairros.map((bairro, index) => (
                  <li
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSelectBairro(bairro)}
                  >
                    {bairro}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="left-column">
          <h2>Áreas de abrangência de atendimento</h2>
          <ul>
            <li>Selecione uma unidade abaixo;</li>
            <li>Ou busque por seu bairro na barra de pesquisa;</li>
          </ul>

          <div className="select-unidade">
            {unidade.map((item, index) => {
              return (
                <>
                  <button
                    onClick={() => {
                      toggleList(item, index);
                    }}
                    className="unidade-button"
                  >
                    {item.titulo}
                  </button>
                  {index == selectedIndex && isExpanded && (
                    <>
                      <b>Área de Abrangência:</b>
                      <ul className="bairro-list">
                        {unidadeSelecionado.abrangencia.map((bairro, index) => (
                          <li
                            style={{
                              color: bairro == bairroSelecionado ? "red" : "",
                            }}
                            key={index}
                          >
                            {bairro}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>

        <div className="right-column">
          <div className="map-card">
            {/* <img
              className="imagem-unidade"
              src={unidadeSelecionado.imagem}

            /> */}
            <div className="map-card-info">
              <h3>{unidadeSelecionado.titulo}</h3>
              <p>Coordenadora: {unidadeSelecionado.coordenador}</p>
              <p>
                Telefone: {unidadeSelecionado.telefone} - Ramal:{" "}
                {unidadeSelecionado.ramal}
              </p>
              <p>Endereço: {unidadeSelecionado.endereco}</p>
              <h3>Localização</h3>
              <div className="map-embed">
                <iframe
                  title="Google Map"
                  src={unidadeSelecionado.coordenadas}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="text-footer">
          © 2025 Secretaria Municipal de Ciência e Tecnologia
        </p>
      </div>
    </div>
  );
}

export default App;
