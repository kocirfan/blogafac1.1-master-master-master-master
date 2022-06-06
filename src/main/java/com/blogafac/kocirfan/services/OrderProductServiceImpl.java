package com.blogafac.kocirfan.services;

import com.blogafac.kocirfan.entity.OrderProduct;
import com.blogafac.kocirfan.repository.OrderProductRepository;
import com.blogafac.kocirfan.services.IServices.IOrderProductService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class OrderProductServiceImpl implements IOrderProductService {


    private OrderProductRepository orderProductRepository;

    public OrderProductServiceImpl(OrderProductRepository orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }

    @Override
    public OrderProduct create(OrderProduct orderProduct) {
        return this.orderProductRepository.save(orderProduct);
    }
}
