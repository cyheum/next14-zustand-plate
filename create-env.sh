#!/bin/bash

touch .env

echo "NEXT_PUBLIC_SENTRY_DSN="${NEXT_PUBLIC_SENTRY_DSN} > .env
echo "NEXT_PUBLIC_SENTRY_AUTH_TOKEN="${NEXT_PUBLIC_SENTRY_AUTH_TOKEN} >> .env
echo "NEXT_PUBLIC_ADMIN_ID"=${NEXT_PUBLIC_ADMIN_ID} >> .env
echo "NEXT_PUBLIC_ADMIN_PASSWORD"=${NEXT_PUBLIC_ADMIN_PASSWORD} >> .env

# touch .env.production

# echo "SENTRY_DSN="${SENTRY_DSN} > .env.production
# echo "SENTRY_AUTH_TOKEN="${SENTRY_AUTH_TOKEN} >> .env.production

