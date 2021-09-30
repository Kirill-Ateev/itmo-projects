import http.server
import socketserver

PORT = 8000

class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        # self.send_header("Content-type", "application/octet-stream")
        # self.send_header("Content-length", "33333")
        self.send_header("Connection", "keep-alive")
        self.send_header("Transfer-Encoding", "chunked")
        self.end_headers()
        self.wfile.write(bytes("aaaaaaaaaa","utf-8"))
        self.wfile.write(bytes("bbbbbbbbbbb","utf-8"))
        self.wfile.write(bytes("cccccccccccc","utf-8"))


try:
    server = http.server.HTTPServer(('localhost', PORT), MyHandler)
    print('Started http server')
    server.serve_forever()
except KeyboardInterrupt:
    print('^C received, shutting down server')
    server.socket.close()