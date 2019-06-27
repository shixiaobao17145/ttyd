FROM alpine:3.9
COPY index.html /app/
COPY ttyd_linux.x86_64 /usr/local/bin/ttyd
RUN chmod +x /usr/local/bin/ttyd
EXPOSE 7681

ENTRYPOINT ["/usr/local/bin/ttyd", "-I","/app/index.html", "sh"]
