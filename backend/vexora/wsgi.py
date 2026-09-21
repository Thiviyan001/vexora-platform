import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "vexora.settings")

from django.core.management import call_command
from django.core.wsgi import get_wsgi_application

# Vercel's Python runtime does not necessarily run Django migrations during deployment.
# Apply pending migrations when the serverless instance starts so auth/token tables exist.
try:
    call_command("migrate", interactive=False, verbosity=0)
except Exception:
    # Keep startup alive; the API endpoints will expose the underlying error.
    pass

application = get_wsgi_application()
