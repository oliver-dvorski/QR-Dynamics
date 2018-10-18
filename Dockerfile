#
# PHP Dependencies
#
FROM composer:latest as vendor

COPY database/ database/

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist

FROM php:7.2-apache-stretch

COPY . /var/www/html
COPY --from=vendor /app/vendor/ /var/www/html/vendor/
RUN ls -la /var/www/html/vendor

# RUN chown -R www-data /var/www/html

RUN cp /var/www/html/apache.conf /etc/apache2/sites-available/main.conf
RUN a2ensite main.conf
RUN a2dissite 000-default.conf
RUN a2enmod rewrite

RUN ls -la /var/www/html/vendor
