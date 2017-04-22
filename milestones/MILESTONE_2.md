# MILESTONE_2 - live coding

## agenda:

1. Tworzenie projektu (i omówienie przy okazji NPM).

* `npm init`
* `npm install` (+package.json) (nie trzeba trzymać źródeł lokalnie,
zapisujemy tylko ich definicje wersji, i za pomocą tego polecenia
ściągamy wszystkie potrzebne nam zależności naszej aplikacji).
* open sourcowy dostęp do źródeł bibliotek
* definicja skryptów do budowania naszej aplikacji (typu npm start)

2. Jak wystartować proces serwera HTTP?
3. Jak utworzyć serwer Websocketowy (wprowadzenie do biblioteki
socket.io; czym różnią się requesty HTTP od WebSockets)?

* HTTP request - następuje połączenie między klientem (na
jednorazowym połączeniu TCP), a serwerem. Klient wysyła request,
oczekuje na response, a serwer jak będzie gotowy wysyła response.
* WebSockets - następuje podłączenie klienta (handshake).
Serwer akceptuje podłączenie (acknowledgement). Następnie
między nimi może nastąpić wymiana wiadomości (na tym samym 
połączeniu TCP - bi-directional messages).

4. Utworzenie klienta (+podłączenie się do serwera).
5. Emitowanie pierwszej wiadomości od klienta.
6. Odbieranie przez serwer wiadomości od klienta.
7. Broadcasting wiadomości (przez serwer) do innych klientów.

## ćwiczenia:

1. Utworzyć prosty chat websocket'owy (po swojemu).
2. Połączyć się z kolegą obok i wysłać do niego wiadomość.
