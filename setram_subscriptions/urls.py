from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/customers/', include('customers.urls')),
    path('api/offers/', include('offers.urls')),
    path('api/subscriptions/', include('subscriptions.urls')),
]