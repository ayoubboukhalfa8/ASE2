from django.shortcuts import render
from rest_framework import generics
from .models import Offer
from .serializers import OfferSerializer

class OfferListView(generics.ListAPIView):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer

