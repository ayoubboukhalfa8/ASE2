from django.shortcuts import render
from rest_framework import generics
from .models import Subscription
from .serializers import SubscriptionSerializer

class SubscriptionListView(generics.ListAPIView):
    serializer_class = SubscriptionSerializer

    def get_queryset(self):
        customer = self.request.user
        return Subscription.objects.filter(customer=customer)
