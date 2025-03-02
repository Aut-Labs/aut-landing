FROM nginx:alpine

# Remove the default configuration files that come with the image
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy in your custom main configuration and server block file
# (Assuming you have a local nginx.conf and default.conf prepared)
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expose the port as per your custom config (9080)
EXPOSE 9080

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]