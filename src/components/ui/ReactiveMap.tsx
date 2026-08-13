import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MapPin, Navigation, Search, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Coordenadas Padrão CBE (Uberlândia - MG)
const CBE_COORDS: [number, number] = [-18.9186, -48.2772];

interface AddressData {
  cep?: string;
  logradouro?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  lat?: number;
  lng?: number;
}

interface ReactiveMapProps {
  initialLocation?: string;
  onAddressSelect?: (address: AddressData) => void;
  className?: string;
  interactiveSearch?: boolean;
}

export function ReactiveMap({
  initialLocation = "",
  onAddressSelect,
  className = "",
  interactiveSearch = true,
}: ReactiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerInstanceRef = useRef<L.Marker | null>(null);

  const [cepInput, setCepInput] = useState(initialLocation);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [addressData, setAddressData] = useState<AddressData>({
    localidade: "Uberlândia",
    uf: "MG",
    logradouro: "Atendimento em Uberlândia e Região",
    bairro: "Distrito Industrial",
    lat: CBE_COORDS[0],
    lng: CBE_COORDS[1],
  });

  // Inicializa o Mapa Leaflet
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Evita reinicializar

    // Criar ícone personalizado do marcador
    const cbeIcon = L.divIcon({
      className: "custom-map-marker",
      html: `
        <div style="
          position: relative;
          width: 36px;
          height: 36px;
          background: #EC3237;
          border: 3px solid #FFFFFF;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 10px;
            height: 10px;
            background: #FFFFFF;
            border-radius: 50%;
          "></div>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
    });

    const map = L.map(mapContainerRef.current, {
      center: CBE_COORDS,
      zoom: 14,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    // Camada de Tile com estética moderna e limpa (CartoDB Positron)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    const marker = L.marker(CBE_COORDS, { icon: cbeIcon })
      .addTo(map)
      .bindPopup(
        `
        <div style="font-family: system-ui, sans-serif; padding: 4px;">
          <strong style="color: #314E8A; font-size: 14px;">CBE Engenharia</strong><br/>
          <span style="font-size: 12px; color: #555;">Quadros Elétricos Sob Medida</span><br/>
          <span style="font-size: 11px; color: #888;">Uberlândia - MG</span>
        </div>
      `
      );

    mapInstanceRef.current = map;
    markerInstanceRef.current = marker;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Mover o marcador no mapa
  const updateMapPosition = (lat: number, lng: number, title?: string) => {
    if (!mapInstanceRef.current || !markerInstanceRef.current) return;

    mapInstanceRef.current.flyTo([lat, lng], 15, {
      duration: 1.5,
    });

    markerInstanceRef.current.setLatLng([lat, lng]);
    if (title) {
      markerInstanceRef.current.setPopupContent(`
        <div style="font-family: system-ui, sans-serif; padding: 4px;">
          <strong style="color: #314E8A; font-size: 13px;">${title}</strong><br/>
          <span style="font-size: 11px; color: #666;">Local da instalação</span>
        </div>
      `).openPopup();
    }
  };

  // Buscar CEP via API ViaCEP + Geocodificação Nominatim
  const searchCep = async (cepToSearch: string) => {
    const cleanCep = cepToSearch.replace(/\D/g, "");
    if (cleanCep.length !== 8) {
      setErrorMsg("Digite um CEP válido com 8 números");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      // 1. Consulta ViaCEP
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();

      if (data.erro) {
        setErrorMsg("CEP não encontrado. Tente digitar o nome da rua ou cidade.");
        setLoading(false);
        return;
      }

      const fullAddressString = `${data.logradouro || ""}, ${data.bairro || ""}, ${data.localidade} - ${data.uf}, Brasil`;

      // 2. Geocodificar para obter Lat/Lng aproximado
      const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddressString)}`
      );
      const geoData = await geoRes.json();

      let lat = CBE_COORDS[0];
      let lng = CBE_COORDS[1];

      if (geoData && geoData.length > 0) {
        lat = parseFloat(geoData[0].lat);
        lng = parseFloat(geoData[0].lon);
      }

      const newAddress: AddressData = {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
        lat,
        lng,
      };

      setAddressData(newAddress);
      updateMapPosition(lat, lng, `${data.logradouro || data.localidade}`);

      if (onAddressSelect) {
        onAddressSelect(newAddress);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Erro ao buscar o CEP. Verifique a conexão.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetToHQ = () => {
    updateMapPosition(CBE_COORDS[0], CBE_COORDS[1], "Matriz CBE Engenharia");
    setCepInput("");
    setAddressData({
      localidade: "Uberlândia",
      uf: "MG",
      logradouro: "Atendimento em Uberlândia e Região",
      bairro: "Distrito Industrial",
      lat: CBE_COORDS[0],
      lng: CBE_COORDS[1],
    });
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressData.lat || CBE_COORDS[0]},${addressData.lng || CBE_COORDS[1]}`;

  return (
    <div className={`relative overflow-hidden rounded-xl border border-border shadow-panel bg-surface ${className}`}>
      {/* Barra de busca de CEP dinâmica */}
      {interactiveSearch && (
        <div className="absolute top-4 left-4 right-4 z-[500] max-w-md bg-background/95 backdrop-blur-md p-3 rounded-lg border border-border shadow-md">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchCep(cepInput);
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-brand" />
              <Input
                type="text"
                placeholder="Informe seu CEP (ex: 38400-100)"
                value={cepInput}
                onChange={(e) => setCepInput(e.target.value)}
                className="pl-9 h-10 text-sm bg-background border-border"
              />
            </div>
            <Button type="submit" size="sm" disabled={loading} className="h-10 px-4">
              {loading ? (
                <span className="inline-block animate-spin">...</span>
              ) : (
                <>
                  <Search className="size-4 mr-1.5" />
                  Buscar
                </>
              )}
            </Button>
          </form>

          {errorMsg && (
            <div className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
              <AlertCircle className="size-3.5" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      )}

      {/* Container do Mapa Leaflet */}
      <div ref={mapContainerRef} className="h-[360px] w-full z-0 sm:h-[440px]" />

      {/* Painel inferior de informações reativas do endereço */}
      <div className="p-4 bg-surface border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Localização Reativa da Obra / Instalação
            </span>
          </div>
          <p className="font-display text-base font-semibold text-primary">
            {addressData.logradouro ? `${addressData.logradouro}, ` : ""}
            {addressData.bairro ? `${addressData.bairro} — ` : ""}
            {addressData.localidade}/{addressData.uf}
          </p>
          {addressData.cep && (
            <p className="text-xs text-muted-foreground font-mono">
              CEP: {addressData.cep} | Lat: {addressData.lat?.toFixed(4)}, Lng: {addressData.lng?.toFixed(4)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleResetToHQ}
            className="text-xs h-9"
          >
            <Navigation className="size-3.5 mr-1.5 text-brand" />
            Fábrica CBE
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            asChild
            className="text-xs h-9"
          >
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-3.5 mr-1.5" />
              Google Maps
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
