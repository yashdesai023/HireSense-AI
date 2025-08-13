package com.hiresense.dto;

import lombok.Data;

@Data
public class ResumeScoreDto {
    private int fit_score;
    private String category;
    private Object details; // Can be a Map<String, Object> or a specific DTO if structure is fixed
}
