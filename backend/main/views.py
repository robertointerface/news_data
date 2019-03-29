# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie


@ensure_csrf_cookie
def main(request):
    """Any call that is not directed to the API will be directed and the door to react components
    will be loaded."""
    return render(request, 'react_app.html')
